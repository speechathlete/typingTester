import { signInWithGoogle } from "../firebase";

const LoginButton = () => (
  <button id="btn" onClick={signInWithGoogle}>
    Login with Google
  </button>
);

export default LoginButton;
