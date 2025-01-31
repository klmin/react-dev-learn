import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponentOptimized = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
  
    // ✅ useCallback을 사용하여 함수 재생성 방지
    const handleClick = useCallback(() => {
      console.log("Button Clicked!");
    }, []);
  
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>With useCallback</h2>
  
        {/* Count 증가 버튼 */}
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
  
        {/* Input 변경 */}
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  
        {/* 자식 컴포넌트 */}
        <ChildComponent handleClick={handleClick} />
      </div>
    );
  };

export default ParentComponentOptimized;