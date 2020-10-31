import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { signInWithGoogle } from "../firebase/config";
export default function Login() {
  const user = useContext(UserContext);
  const uid = user.user.uid;

  if (uid) {
    return null;
  } else {
    return (
      <div className="login-buttons">
        <button className="loginBtn" onClick={signInWithGoogle}>
          <span> Continue with Google</span>
        </button>
      </div>
    );
  }
}
