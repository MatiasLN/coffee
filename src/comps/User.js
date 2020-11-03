import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const User = () => {
  let user = useContext(UserContext);
  user = user.user;

  return (
    <div className="user">
      <img src={user.photoURL} alt={user.photoURL} />
      {user ? <p>Hei {user.displayName}</p> : ""}
    </div>
  );
};

export default User;
