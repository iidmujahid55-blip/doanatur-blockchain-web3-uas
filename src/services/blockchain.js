import { ethers } from "ethers";

export const connectWallet = async () => {
  if (!window.ethereum) {
    alert("MetaMask tidak ditemukan");
    return null;
  }
  try {
    // Ask user to connect accounts (shows MetaMask popup)
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    const balance = await provider.getBalance(address);

    return {
      address,
      balance: ethers.formatEther(balance),
    };
  } catch (err) {
    console.error("connectWallet error", err);
    throw err;
  }
};

export const readDonations = async (contractAddress) => {
  if (!contractAddress) throw new Error("Contract address required");

  if (!window.ethereum) {
    throw new Error("No injected provider (MetaMask) found. Connect wallet first.");
  }

  const abi = [
    "function getDonations() view returns (tuple(address donor,uint256 amount,uint256 time)[])",
  ];

  const provider = new ethers.BrowserProvider(window.ethereum);
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const raw = await contract.getDonations();

  return raw.map((d) => ({
    donor: d.donor,
    amount: ethers.formatEther(d.amount),
    time: Number(d.time) * 1000,
  }));
};

export const sendEth = async (to, amountEth) => {
  if (!window.ethereum) throw new Error("MetaMask not available");
  if (!to || !amountEth) throw new Error("to and amount required");

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const from = await signer.getAddress();

  const txRequest = {
    to,
    value: ethers.parseEther(String(amountEth)),
  };

  const tx = await signer.sendTransaction(txRequest);
  // wait for one confirmation / receipt
  const receipt = await tx.wait();
  return { from, txHash: tx.hash, receipt };
};
