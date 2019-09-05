import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, clicks, onChange, onReplace, inputValue }) => {
    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <h1>Number of Clicks: {clicks}</h1>

          <input type='number' onChange={(e) => onChange(e.target.value)}></input>
          <button disabled={!inputValue} onClick={onReplace}>Change Count Number</button>

        </div>
      </div>
    );
}


export default Counter;