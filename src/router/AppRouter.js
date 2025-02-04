import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import routes from "./routes"; // ✅ routes.js에서 가져옴

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
           <Route key={index} path={route.path} element={route.element}>
           {/* ✅ 중첩 라우트(children) 처리 추가 */}
           {route.children && route.children.map((child, i) => (
             <Route key={i} path={child.path} element={child.element} />
           ))}
         </Route>
       ))}
      </Routes>
    </>
  );
};

export default AppRouter;