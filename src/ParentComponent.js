import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = ({ user, setUser }) => {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent user={user} setUser={setUser} />
    </div>
  );
};

export default ParentComponent;