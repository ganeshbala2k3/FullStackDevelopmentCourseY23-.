import React, { useState } from 'react';
import '../Components/CSS/Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calc-container">
      <div className="calc-display">
        <div className="calc-input-stream">{input || "0"}</div>
        <div className="calc-result">{result}</div>
      </div>

      <div className="calc-buttons">
        {['7', '8', '9', '/'].map(item => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {['4', '5', '6', '*'].map(item => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {['1', '2', '3', '-'].map(item => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {['0', '.', '=', '+'].map(item => (
          <button 
            key={item} 
            className={item === '=' ? 'equals-btn' : ''}
            onClick={item === '=' ? calculateResult : () => handleClick(item)}
          >
            {item}
          </button>
        ))}
        <button className="clear-btn" onClick={clearInput}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;