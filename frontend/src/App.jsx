import React, { useState } from 'react';
import WalletConnect from './components/Walletconnect';
import CoinFlip from './components/coinflip';
import './styles.css';

const App = () => {
  const [signer, setSigner] = useState(null);

  return (
    <div className="App">
      <h1>Coin Flip Game</h1>
      <WalletConnect setSigner={setSigner} />
      {signer && <CoinFlip signer={signer} />}
    </div>
  );
};

export default App;
