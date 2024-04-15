import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //  Handle increment of the counter
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 100);
  };

  // Handle decrement of the counter
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 100);
  };
  return (
    <div className="container">
      <div>
        <button className="btn btn-3" onClick={handleDecrement}>
          Minus 100
        </button>
        <button className="btn btn-2" onClick={handleIncrement}>
          Add 100
        </button>

        <h3 className="counter">Count is {count}</h3>
        <button
          className="btn btn-3"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
