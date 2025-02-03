import React from "react";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import WindowSize from "./components/WindowSize";

const App = () => {
  return (
    <div>
      <h1>Redux Counter Example</h1>
      <Counter />
      <UserList />
      <WindowSize />
    </div>
  );
};

export default App;