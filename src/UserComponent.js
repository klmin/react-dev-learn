import React, { useState } from "react";
import ParentComponent from "./ParentComponent";

const UserComponent = () => {
  const [user, setUser] = useState("John Doe");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>React Props Example</h1>
        <ParentComponent user={user} setUser={setUser} />
    </div>
  );
};

export default UserComponent;