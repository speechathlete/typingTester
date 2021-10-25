import { useContext } from "react";
import { signOut } from "../firebase";
import { authContext } from "../AuthProvider";
import LoginButton from "./LoginButton";

const AccountPage = () => {
	const user = useContext(authContext);
	if (user)
		return (
			<>
				<h2>Name: {user.displayName}</h2>
				<h2>Email: {user.email}</h2>
				<button onClick={signOut}>Log Out</button>
			</>
		);
	else
		return <LoginButton />;
};

export default AccountPage;