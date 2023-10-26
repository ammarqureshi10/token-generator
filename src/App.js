import { useState } from "react";
import TokenGenerator from "./TokenGenerator";
import "./styles.css";
import { Signer, ethers } from "ethers";

export default function App() {
  const [signer, setSigner] = useState();
  // connect wallet
  async function connectWallet() {
    if (window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      setSigner(signer);
      console.log("signer", signer);
    } else {
      alert("Install metamask");
    }
  }
  return (
    <div className="App">
      <h1>Token Generator</h1>
      <button onClick={connectWallet}>Connect wallet</button>
      <TokenGenerator />
    </div>
  );
}
