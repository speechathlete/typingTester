import { useContext } from "react";
import { authContext } from "../AuthProvider";
import LoginButton from "./LoginButton";
import AccountData from "./AccountData";

const AccountPage = () => {
  const user = useContext(authContext);
  if (user) return <AccountData user={user} />;
  else return <LoginButton />;
};

export default AccountPage;
