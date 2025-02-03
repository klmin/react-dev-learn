import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  
  const { count, increment, decrement, reset } = useCounter(10); // 초기값 10

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter