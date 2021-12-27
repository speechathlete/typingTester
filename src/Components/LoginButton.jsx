import { signInWithGoogle } from "../firebase";

const LoginButton = () => (
  <button
    style={{
      height: "100px",
      width: " 500px",
      position: "fixed",
      top: "calc(0.45*100vh)",
      left: "calc(.35*100vw)",
      border: "none",
      fontSize: "55px",
      background: `rgb(0, 0, 0)`,
      color: "#eb5858",
      fontFamily: "cursive",
    }}
    className="btn btn-primary btn-lg "
    onClick={signInWithGoogle}
  >
    Login with Google
  </button>
);

export default LoginButton;
