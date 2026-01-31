import React, { useState } from "react";
import { connectWallet } from "../services/blockchain";
import "./Wallet.css";

const Wallet = () => {
	const [wallet, setWallet] = useState(null);
	const [error, setError] = useState(null);

	const handleConnect = async () => {
		setError(null);
		try {
			const data = await connectWallet();
			setWallet(data);
		} catch (err) {
			setError(err?.message || "Gagal menghubungkan wallet");
		}
	};

	return (
		<div>
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<h2>Wallet</h2>
				<button className="wallet-btn" onClick={handleConnect}>Connect Wallet</button>
			</div>

			{wallet ? (
				<div style={{ marginTop: 12 }}>
					<div className="address">{wallet.address}</div>
					<div className="balance">{wallet.balance} ETH</div>
				</div>
			) : (
				<div style={{ marginTop: 8, color: "#94a3b8" }}>Belum terhubung</div>
			)}

			{error && <div style={{ marginTop: 8, color: "#fecaca" }}>{error}</div>}
		</div>
	);
};

export default Wallet;
