import React, { useState, useMemo } from "react";

const expensiveCalculation = (num) => {
  console.log("🟢 Expensive Calculation Running...");
  return num * 2;
};

const CounterOptimized = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // ✅ `useMemo` 사용하여 `number`가 변경될 때만 계산 실행
  const doubledNumber = useMemo(() => expensiveCalculation(number), [number]);

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

export default CounterOptimized;