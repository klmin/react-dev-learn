import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import UserList from "./UserList";
import WindowSize from "./WindowSize";
import Navbar from "./Navbar"
import Home from "../pages/Home"
import About from "../pages/About"
import NotFound from "../pages/NotFound"
import UserProfile from "./UserProfile";

const AppRouter = () => {
    return (
        <Router>
            <Navbar /> {/* ✅ 모든 페이지에서 Navbar 표시 */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* ✅ 기본 경로 */}
                <Route path="/about" element={<About />} /> {/* ✅ About 페이지 */}
                <Route path="/counter" element={<Counter />} /> {/* ✅ count 페이지 */}
                <Route path="/list" element={<UserList />} /> {/* ✅ /list 페이지 */}
                <Route path="/window-size" element={<WindowSize />} /> {/* ✅ /window-size 페이지 */}
                <Route path="/users/:id" element={<UserProfile />} /> {/* ✅ /users/ 동적 라우팅 */}
                <Route path="*" element={<NotFound />} /> {/* ✅ 없는 페이지 처리 */}
            </Routes>
        </Router>
    );
}

export default AppRouter;