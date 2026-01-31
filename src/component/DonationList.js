import React, { useEffect, useState } from "react";
import { readDonations } from "../services/blockchain";
import "./DonationList.css";

const EXPLORER_BASE = {
  sepolia: "https://sepolia.etherscan.io",
};

const DonationList = () => {
  const [backendTx, setBackendTx] = useState([]);
  const [onChain, setOnChain] = useState([]);
  const [contractAddress, setContractAddress] = useState("");

  // filters & paging
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // all | confirmed | pending
  const [networkFilter, setNetworkFilter] = useState("all");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [selectedTx, setSelectedTx] = useState(null);

  useEffect(() => {
    const fetchTx = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/transactions");
        const j = await res.json();
        setBackendTx(j.transactions || []);
      } catch (err) {
        console.error("Failed to fetch backend transactions", err);
      }
    };
    fetchTx();
  }, []);

  const loadOnChain = async () => {
    try {
      const data = await readDonations(contractAddress);
      setOnChain(data);
    } catch (err) {
      alert(err.message || err);
    }
  };

  const fmtDate = (ts) => {
    try {
      return new Date(ts).toLocaleString();
    } catch (e) {
      return "-";
    }
  };

  const openTx = (network, txHash) => {
    if (!txHash) return;
    const base = EXPLORER_BASE[network] || EXPLORER_BASE.sepolia;
    window.open(`${base}/tx/${txHash}`, "_blank");
  };

  const openAddress = (network, address) => {
    if (!address) return;
    const base = EXPLORER_BASE[network] || EXPLORER_BASE.sepolia;
    window.open(`${base}/address/${address}`, "_blank");
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      console.error("copy failed", e);
    }
  };

  // filtering & paging
  const filtered = backendTx.filter((t) => {
    if (statusFilter === "confirmed" && !t.confirmed) return false;
    if (statusFilter === "pending" && t.confirmed) return false;
    if (networkFilter !== "all" && t.network !== networkFilter) return false;
    if (search) {
      const s = search.toLowerCase();
      if (!t.from.toLowerCase().includes(s) && !t.to.toLowerCase().includes(s) && !(t.txHash || "").toLowerCase().includes(s)) return false;
    }
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages]);

  return (
    <div className="card donations-card">
      <div className="list-header">
        <h3>Daftar Transaksi Donasi</h3>
        <div className="filters">
          <input className="input" placeholder="Search address or tx" value={search} onChange={(e)=>{setSearch(e.target.value); setPage(1)}} />
          <select className="input" value={statusFilter} onChange={(e)=>{setStatusFilter(e.target.value); setPage(1)}}>
            <option value="all">All Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
          </select>
          <select className="input" value={networkFilter} onChange={(e)=>{setNetworkFilter(e.target.value); setPage(1)}}>
            <option value="all">All Networks</option>
            <option value="sepolia">Sepolia</option>
          </select>
        </div>
      </div>

      <ul className="tx-list">
        {pageItems.length === 0 ? (
          <div className="tx-list-empty">No transactions found</div>
        ) : (
          pageItems.map((t) => (
          <li key={t.id} className="tx-item" onClick={() => setSelectedTx(t)}>
            <div className="tx-left">
              <div className="mono">{t.from}</div>
              <div className="muted small">to <span className="mono">{t.to}</span></div>
              <div className="muted small">{fmtDate(t.time)}</div>
            </div>

            <div className="tx-right">
              <div className="tx-amount">{t.amount} {t.unit || "ETH"}</div>
              <div className="tx-meta">
                <span className={`chip ${t.confirmed ? 'chip-green' : 'chip-yellow'}`}>{t.confirmed ? 'confirmed' : 'pending'}</span>
                {t.txHash && <span className="mono small">{t.txHash.slice(0,12)}...</span>}
              </div>
            </div>
          </li>
          ))
        )}
      </ul>

      <div className="pager">
        <button className="small-btn" onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>Prev</button>
        <div className="pager-info">Page {page} / {totalPages}</div>
        <button className="small-btn" onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}>Next</button>
      </div>

      <hr />

      <h4>Load On-chain Donations</h4>
      <div className="inline-input">
        <input
          placeholder="Contract address (Sepolia)"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          className="input"
        />
        <button className="btn" onClick={loadOnChain}></button>
      </div>

      <ul className="donation-list">
        {onChain.length === 0 ? (
          <div className="tx-list-empty">خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ</div>
        ) : (
          onChain.map((d, i) => (
          <li key={i} className="donation-item">
            <div>
              <div className="mono">{d.donor}</div>
              <div className="muted small">{fmtDate(d.time)}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="donation-amount">{d.amount} ETH</div>
              <div className="tx-actions">
                <button className="small-btn" onClick={() => openAddress('sepolia', d.donor)}>Address</button>
                <button className="small-btn" onClick={() => copyText(d.donor)}>Copy</button>
              </div>
            </div>
          </li>
        ))
        )}
      </ul>

      {selectedTx && (
        <div className="tx-detail">
          <div className="tx-detail-header">
            <h4>Transaction Detail</h4>
            <button className="small-btn" onClick={()=>setSelectedTx(null)}>Close</button>
          </div>
          <div className="tx-detail-body">
            <div><strong>From:</strong> <span className="mono">{selectedTx.from}</span> <button className="small-btn" onClick={()=>copyText(selectedTx.from)}>Copy</button></div>
            <div><strong>To:</strong> <span className="mono">{selectedTx.to}</span> <button className="small-btn" onClick={()=>copyText(selectedTx.to)}>Copy</button></div>
            <div><strong>Amount:</strong> {selectedTx.amount} {selectedTx.unit}</div>
            <div><strong>Status:</strong> {selectedTx.confirmed ? 'Confirmed' : 'Pending'}</div>
            <div><strong>Block:</strong> {selectedTx.blockNumber || '-'}</div>
            <div><strong>TxHash:</strong> {selectedTx.txHash ? <span className="mono">{selectedTx.txHash}</span> : '-' } {selectedTx.txHash && <><button className="small-btn" onClick={()=>openTx(selectedTx.network, selectedTx.txHash)}>View</button><button className="small-btn" onClick={()=>copyText(selectedTx.txHash)}>Copy</button></>}</div>
            <div style={{marginTop:8}}><strong>Note:</strong><div className="note-box">{selectedTx.note || '-'}</div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationList;
