import { useContext, useEffect } from "react";
import { signInWithGoogle, auth,firebase } from "../firebaseConfig";
import { authContext } from "../AuthProvider";
let AccountPage = () => {
	let user = useContext(authContext);
     useEffect(()=>{
		 console.log(user);
	 },[user]);
	return (
	  <>
	  {/* Google Authentication */}
		{user?
		(<>
	    	<h1>LoggedIn</h1>
			<h1>USER:{user.displayName}</h1>
		    <button onClick={()=>{
				auth.signOut()}}>LogOut</button>
		</>
		):
		(
			<button
			onClick={() => {
				signInWithGoogle();
			
			}}
			>
			Login with google
			</button>
		)
	}
  
	   
	  </>
	);
};

export default AccountPage;


