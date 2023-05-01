import "./SignIn.css";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

function SignIn({ auth }) {
  const signInWithGoogle = () => {
    console.log(auth);
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  };
  return (
    <div className="sign-in">
      <button onClick={signInWithGoogle}>
        <div>
          <img src="/google.png" alt="Google Login" />
        </div>
        <div>Sign in with Google</div>
      </button>
    </div>
  );
}

export default SignIn;
