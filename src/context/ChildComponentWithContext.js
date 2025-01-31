import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const ChildComponent = () => {
  // ✅ Context에서 `user`와 `setUser` 가져오기
  const { user, setUser } = useContext(UserContext);
  
  return (
    <div>
      <h3>Child Component</h3>
      <p>User: {user}</p>
      <button onClick={() => setUser("Jane Doe")}>Change User</button>
    </div>
  );
};

export default ChildComponent;