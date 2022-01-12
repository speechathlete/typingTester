import { useContext } from "react";
import { authContext } from "../AuthProvider";
import LoginButton from "./LoginButton";
import AccountData from "./AccountData";

const AccountPage = () => {
  const user = useContext(authContext);
  if (user) return <AccountData user={user} />;
  else
    return (
      <div
        style={{
          position: "fixed",
          top: "22rem",
          left: "44rem",
        }}
      >
        <LoginButton />
      </div>
    );
};

export default AccountPage;
