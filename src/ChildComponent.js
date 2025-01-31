import React from "react";

const ChildComponent = ({ handleClick }) => {
    console.log("ChildComponent rendered!");
  
    return (
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleClick}>Click Me</button>
      </div>
    );
  };

export default React.memo(ChildComponent);