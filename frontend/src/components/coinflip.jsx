import React, { useState } from 'react';

const CoinFlip = ({ signer }) => {
  const [amount, setAmount] = useState(0);
  const [side, setSide] = useState("heads");
  const [result, setResult] = useState("");

  const flipCoin = async () => {
    const outcome = Math.random() < 0.5 ? "heads" : "tails";
    setResult(outcome);

    // Logic for handling token transfer would go here
    // For simplicity, we are just showing the result
    if (outcome === side) {
      alert(`You win! Outcome: ${outcome}`);
      // Logic to double the tokens
    } else {
      alert(`You lose! Outcome: ${outcome}`);
      // Logic to lose the tokens
    }
  };

  return (
    <div>
      <h2>Coin Flip Game</h2>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount" 
      />
      <select onChange={(e) => setSide(e.target.value)}>
        <option value="heads">Heads</option>
        <option value="tails">Tails</option>
      </select>
      <button onClick={flipCoin}>Flip Coin</button>
      {result && <p>Outcome: {result}</p>}
    </div>
  );
};

export default CoinFlip;
