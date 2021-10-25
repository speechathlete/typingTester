import { createContext, useEffect, useState } from "react";
import { auth, firestore } from "./firebase";
export const authContext = createContext();

const AuthProvider = props => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => auth.onAuthStateChanged(async (user) => {
		if (user) {
			const { displayName, email, uid, photoURL } = user;
			const docRef = firestore.collection("users").doc(uid)
			const documentSnapshot = await docRef.get()
			if (!documentSnapshot.exists) {
				docRef.set({
					displayName,
					email,
					photoURL
				})
			}
			setUser({ displayName, email, uid, photoURL });
		} else
			setUser(null);
		setLoading(false);
	}), []);
	return (
		<authContext.Provider value={user}>
			{!loading && props.children}
		</authContext.Provider>
	);
};

export default AuthProvider;