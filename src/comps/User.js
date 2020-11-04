import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { logOut } from "../firebase/config";

const User = () => {
  let user = useContext(UserContext);
  user = user.user;

  const navigation = () => {
    document.querySelector(".hamburger").classList.toggle("is-active");
    document.querySelector(".userPage").classList.toggle("show");
    document.querySelector("nav").classList.toggle("active");
  };

  return (
    <>
      <nav>
        <button
          className="hamburger hamburger--slider"
          type="button"
          onClick={navigation}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>

      {user ? (
        <>
          <div className="userPage">
            <div className="userContent">
              <img src={user.photoURL} alt={user.photoURL} />
              <p>Hei {user.displayName}</p>
              <button
                className="logOutBtn"
                onClick={() => {
                  logOut();
                }}
              >
                Logg ut
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default User;
