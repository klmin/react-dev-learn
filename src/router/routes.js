import Home from "../pages/Home";
import About from "../pages/About";
import Counter from "../components/Counter";
import UserList from "../components/UserList";
import WindowSize from "../components/WindowSize";
import UserProfile from "../components/UserProfile";
import NotFound from "../pages/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/counter", element: <Counter /> },
  { path: "/list", element: <UserList /> },
  { path: "/window-size", element: <WindowSize /> },
  { 
    path: "/users",
    element: <UserList />, 
    children: [
      { path: ":id", element: <UserProfile /> }, // ✅ 중첩 라우트 적용
    ] 
  },
  { path: "*", element: <NotFound /> },
];

export default routes;