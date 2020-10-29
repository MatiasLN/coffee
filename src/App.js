import React, { useState } from "react";
import "./styles/sass/bundle.scss";
import ImageGrid from "./comps/ImageGrid";
import Logo from "./comps/Logo";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
  const newRating = (data) => {
    if (data) {
      setRating(data);
    }
  };

  const [data, setData] = useState(null);
  const [rating, setRating] = useState(newRating);

  return (
    <div className="App">
      <Logo />
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
}

export default App;
