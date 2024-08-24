import React, { useState } from "react";
import { BrowserProvider } from "ethers";

const WalletConnector = () => {
  const [address, setAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Create a BrowserProvider from the current window.ethereum
        const provider = new BrowserProvider(window.ethereum);

        // Request account access
        await provider.send('eth_requestAccounts', []);

        // Get the signer from the provider (awaiting its resolution)
        const signer = await provider.getSigner();

        // Check if signer is valid and retrieve the address
        if (signer) {
          const userAddress = await signer.getAddress();
          setAddress(userAddress);
          console.log("Connected Address: ", userAddress);
        } else {
          console.error('Signer is undefined');
        }
      } catch (error) {
        console.error('Error connecting to wallet: ', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {address && <p>Connected Address: {address}</p>}
    </div>
  );
};

export default WalletConnector;
