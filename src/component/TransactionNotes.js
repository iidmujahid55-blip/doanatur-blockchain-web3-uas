import React, { useEffect, useState } from "react";
import "../styles/TransactionNotes.css";
import { sendEth } from "../services/blockchain";

function TransactionNotes() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // form state
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const fetchTx = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/transactions");
      const j = await res.json();
      setTransactions(j.transactions || []);
    } catch (e) {
      setError("Gagal mengambil transaksi");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTx(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    setError(null);
    if (!from || !to || !amount) {
      setError("Lengkapi from, to, dan amount");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, to, amount, note }),
      });
      if (!res.ok) throw new Error("Create failed");
      const j = await res.json();
      // prepend created tx
      setTransactions((s) => [j.transaction, ...s]);
      setFrom(""); setTo(""); setAmount(""); setNote("");
    } catch (e) {
      setError("Gagal menambah transaksi");
    }
  };

  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const handleSendOnChain = async (e) => {
    e.preventDefault();
    setError(null);
    if (!to || !amount) {
      setError("Lengkapi to dan amount untuk mengirim on-chain");
      return;
    }

    setSending(true);
    setSendStatus("Mengirim transaksi ke Sepolia (MetaMask)...");
    try {
      const { from: sender, txHash, receipt } = await sendEth(to, amount);

      setSendStatus(`Tx dikirim: ${txHash}`);

      // POST to backend to record the tx
      const payload = {
        from: sender || from,
        to,
        amount,
        unit: "ETH",
        txHash,
        blockNumber: receipt ? receipt.blockNumber : null,
        confirmed: receipt && receipt.status === 1,
        note,
      };

      const res = await fetch("http://localhost:5000/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to save tx");
      const j = await res.json();
      setTransactions((s) => [j.transaction, ...s]);
      setFrom(""); setTo(""); setAmount(""); setNote("");
      setSendStatus("Transaksi tercatat di backend");
    } catch (err) {
      console.error(err);
      setError("Gagal mengirim atau mencatat transaksi on-chain");
      setSendStatus(null);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="card">
      <h2>📒 Catatan Transaksi Donasi</h2>

      <form onSubmit={handleAdd} style={{ display: "grid", gap: 8, marginTop: 12 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <input className="input" placeholder="From address" value={from} onChange={(e)=>setFrom(e.target.value)} />
          <input className="input" placeholder="To address" value={to} onChange={(e)=>setTo(e.target.value)} />
          <input className="input" placeholder="Amount (ETH)" value={amount} onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <input className="input" placeholder="Catatan (opsional)" value={note} onChange={(e)=>setNote(e.target.value)} />
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" type="submit">Tambah Transaksi</button>
          <button className="btn" type="button" onClick={handleSendOnChain} disabled={sending}>
            {sending ? "Mengirim..." : "Kirim Sepolia (On-chain)"}
          </button>
          <button type="button" className="small-btn" onClick={fetchTx}>Refresh</button>
          {error && <div style={{ color: "#fecaca", marginLeft: 8 }}>{error}</div>}
        </div>
        {sendStatus && <div style={{ color: "#bfdbfe", marginTop: 8 }}>{sendStatus}</div>}
      </form>

      {loading ? (
        <p className="empty">Mencari transaksi...</p>
      ) : transactions.length === 0 ? (
        <p className="empty">Belum ada transaksi</p>
      ) : (
        <table className="tx-table">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Donatur</th>
              <th>Jumlah</th>
              <th>Status</th>
              <th>Tx Hash</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td>{new Date(tx.time).toLocaleString()}</td>
                <td>{tx.from}</td>
                <td>{tx.amount} {tx.unit || 'ETH'}</td>
                <td>
                  <span className={`status ${tx.confirmed ? 'success' : 'pending'}`}>
                    {tx.confirmed ? 'Success' : 'Pending'}
                  </span>
                </td>
                <td className="txhash">{tx.txHash || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionNotes;
