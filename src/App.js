<<<<<<< HEAD
<<<<<<< HEAD

=======
import React from "react";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import WindowSize from "./components/WindowSize";
=======
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
>>>>>>> feat/router

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
<<<<<<< HEAD
>>>>>>> feat/custom-hook

import ParentComponent from './ParentComponent';
import ParentComponentOptimized from './ParentComponentOptimized'

export default ParentComponentOptimized;
=======
>>>>>>> feat/router

export default App;