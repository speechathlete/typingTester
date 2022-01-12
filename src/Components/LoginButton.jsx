import { signInWithGoogle } from "../firebase";


const LoginButton = () => (
	<button 
	
	className="btn btn-primary btn-lg " onClick={signInWithGoogle}>
		Login with Google
	</button>
);

export default LoginButton;
