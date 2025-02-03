import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // ✅ 프로그래밍 방식으로 페이지 이동

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <button onClick={() => navigate("/about")}>Go to About</button> {/* ✅ 버튼 클릭으로 이동 */}
    </div>
  );
};

export default Home;