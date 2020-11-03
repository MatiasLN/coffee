import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const User = () => {
  let user = useContext(UserContext);
  user = user.user;

  return (
    <>
      {user ? (
        <>
          <div className="userIsLoggedIn">
            <img src={user.photoURL} alt={user.photoURL} />
            <p>Hei {user.displayName}</p>
          </div>

          <div className="userPage">
            <p>Hello</p>
          </div>
        </>
      ) : null}
    </>
  );
};

export default User;
