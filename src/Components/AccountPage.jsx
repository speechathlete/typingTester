import { useContext, useEffect } from "react";
import { signInWithGoogle, auth } from "../firebaseConfig";
import { authContext } from "../AuthProvider";

const AccountPage = () => {
	const user = useContext(authContext);
	useEffect(() => console.log(user), [user]);
	if (user)
		return (
			<>
				<img src={user.photoURL} align="right" />
				<h2>Name: {user.displayName}</h2>
				<h2>Email: {user.email}</h2>
				<button onClick={auth.signOut}>LogOut</button>
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