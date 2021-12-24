import { authContext } from "../AuthProvider";
import { useContext, useEffect } from "react";

const Profile = () => {
  let user = useContext(authContext);
  return (
    <>
      <h1>Profile</h1>
    </>
  );
};

export default Profile;
