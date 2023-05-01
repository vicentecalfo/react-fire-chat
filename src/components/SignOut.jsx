import "./SignOut.css";

function SignOut({ auth }) {
  return (
    auth.currentUser && (
      <div className="sign-out">
        <img
          className="avatar"
          alt="Foto de avatar"
          src={
            auth?.currentUser?.photoURL ||
            "https://api.dicebear.com/6.x/bottts/png"
          }
        />
        <button onClick={() => auth.signOut()}>
          <img src="./logout.png" alt="Logout"/>
        </button>
      </div>
    )
  );
}

export default SignOut;
