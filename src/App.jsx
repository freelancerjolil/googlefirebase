import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import "./App.css";
import { auth } from "./firebase/firebase.init";

function App() {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log("ERROR", error));
  };

  return (
    <>
      <h1>Google Firebase</h1>
      <button onClick={handleGoogleSignIn}>Login With Google</button>

      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {user.email}</p>
        </div>
      )}
    </>
  );
}

export default App;
