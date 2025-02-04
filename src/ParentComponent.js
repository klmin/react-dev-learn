import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
  
    // ❌ 매번 새로운 함수가 생성됨 (불필요한 함수 재생성)
    const handleClick = () => {
      console.log("Button Clicked!");
    };
  
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Without useCallback</h2>
  
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

export default ParentComponent;