import React from "react";
import Counter from "./Counter";
import UserList from "./UserList";

const App = () => {
  return (
    <div>
      <h1>Redux Counter Example</h1>
      <Counter />
      <UserList />
    </div>
  );
};

export default App;