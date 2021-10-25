import { signInWithGoogle } from "../firebase";

const LoginButton = () => (
	<button onClick={signInWithGoogle}>
		Login with Google
	</button>
);

export default LoginButton;