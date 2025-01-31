import React, { useState } from "react";
import ParentComponent from "./ParentComponentWithContext";
import { UserContext } from "./UserContext";

const App = () => {
  const [user, setUser] = useState("John Doe");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>React Context API Example</h1>
        <ParentComponent />
      </div>
    </UserContext.Provider>
  );
};

export default App;