import "./App.css";
import Wallet from "./component/Wallet";
import DonationList from "./component/DonationList";

function App() {
  return (
    <div className="container">
      <h1 className="title">Donasi Blockchain❤️‍🩹</h1>
      <p className="subtitle">
        Platform donasi transparan berbasis Ethereum (Sepolia)
      </p>

      <div className="card">
        <Wallet />
      </div>

      <div className="card">
        <DonationList />
      </div>
    </div>
  );
}

export default App;
