import React from "react";
import useFetch from "./useFetch";

const UserList = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <h1>User List</h1>
        <ul>
        {data.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
        </ul>
    </div>
  );
};

export default UserList;