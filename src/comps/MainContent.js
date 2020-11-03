import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import ImageGrid from "./ImageGrid";
import Logo from "./Logo";
import Modal from "./Modal";
import Title from "./Title";
import UploadForm from "./UploadForm";
import SignIn from "./SignIn";
import User from "./User";

function MainContent() {
  const newRating = (data) => {
    if (data) {
      setRating(data);
    }
  };

  const [data, setData] = useState(null);
  const [rating, setRating] = useState(newRating);
  const user = useContext(UserContext);
  const uid = user.user.uid;

  if (uid) {
    return (
      <div className="MainContent">
        <Logo />
        <User />
        <Title />
        <UploadForm />
        <ImageGrid
          data={data}
          setData={setData}
          rating={rating}
          setRating={setRating}
        />
        {data && (
          <Modal
            data={data}
            setData={setData}
            initRating={newRating}
            rating={rating}
            setRating={setRating}
          />
        )}
      </div>
    );
  } else {
    return (
      <>
        <Logo />
        <Title />
        <SignIn />
      </>
    );
  }
}

export default MainContent;
