import { useContext } from "react";
import { signInWithGoogle, signOut } from "../firebase";
import { authContext } from "../AuthProvider";

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
		return (
			<button onClick={signInWithGoogle}>
				Login with google
			</button>
		);
};

export default AccountPage;