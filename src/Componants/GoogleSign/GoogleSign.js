import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../Firebase/Config/Config";

const GoogleSign = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState({});
  const GogleSignOnclick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGitLog = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      {user?.email ? (
        <Button onClick={handelSignOut}>SignOut</Button>
      ) : (
        <Button onClick={GogleSignOnclick}>GoogleSignIn</Button>
      )}
      <br />
      <Button onClick={handleGitLog}>Github Login</Button>
      <h3>Name: {user.displayName}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
};

export default GoogleSign;
