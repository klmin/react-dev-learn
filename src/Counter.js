import React, { useState } from "react";

const expensiveCalculation = (num) => {
  console.log("🔴 Expensive Calculation Running...");
  return num * 2;
};

const Increase = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // ❌ `number`가 변경될 때만 필요하지만, `count`가 변경될 때도 실행됨
  const doubledNumber = expensiveCalculation(number);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <h2>Number: {number}</h2>
      <p>Doubled: {doubledNumber}</p>
      <button onClick={() => setNumber(number + 5)}>Increase Number</button>
    </div>
  );
};

export default Increase;