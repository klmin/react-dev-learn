import React from "react";
import useFetch from "../hooks/useFetch";
import { Outlet, Link } from "react-router-dom";

const UserList = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
  console.log("UserList.js")
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <h1>User List</h1>
        <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link> {/* ✅ 사용자 클릭 시 해당 프로필로 이동 */}
          </li>
        ))}
        <Outlet />
        </ul>
    </div>
  );
};

export default UserList;