import React from "react";

const ChildComponentWithContext = ({ user, setUser }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>User: {user}</p>
      <button onClick={() => setUser("Jane Doe")}>Change User</button>
    </div>
  );
};

export default ChildComponentWithContext;