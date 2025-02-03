import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams(); // ✅ URL에서 `id` 값 가져오기
  console.log("UserProfile.js")
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserProfile;