import React, { useState } from "react";

const CoinFlip = () => {
  const [selectedSide, setSelectedSide] = useState(""); // "heads" or "tails"
  const [flipResult, setFlipResult] = useState("");
  const [isWinner, setIsWinner] = useState(null); // true or false based on the result
  const [amount, setAmount] = useState(0); // Amount entered by the user

  const handleSelection = (side) => {
    setSelectedSide(side);
  };

  const flipCoin = () => {
    if (!selectedSide) {
      alert("Please select Heads or Tails!");
      return;
    }

    // Randomly determine the result of the coin flip
    const coinFlipResult = Math.random() < 0.5 ? "heads" : "tails";
    setFlipResult(coinFlipResult);

    // Determine if the user won or lost
    if (coinFlipResult === selectedSide) {
      setIsWinner(true);
    } else {
      setIsWinner(false);
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="coin-flip-container">
      <h1>Coin Flip Game</h1>

      <div>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount to risk"
          className="amount-input"
        />
      </div>

      <div>
        <button onClick={() => handleSelection("heads")} style={{backgroundColor: selectedSide=="heads" && "black"}} className="selection-button">
          Heads
        </button>
        <button onClick={() => handleSelection("tails")} style={{backgroundColor: selectedSide=="tails" && "black"}} className="selection-button">
          Tails
        </button>
      </div>

      <button onClick={flipCoin} className="flip-button">
        Flip Coin
      </button>

      {flipResult && (
        <div className="result">
          <h2>Coin Result: {flipResult}</h2>
          {isWinner !== null && (
            <h3>
              {isWinner ? `You Win! Amount Won: ${amount * 2}` : "You Lose!"}
            </h3>
          )}
        </div>
      )}
    </div>
  );
};

export default CoinFlip;
