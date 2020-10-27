import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import StarRating from "./StarRating";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpg", "image/jpeg", "image/heic"];
  const [rating, setRating] = useState(0);

  const changeHandlerText = (e) => {
    setTitle(e.target.value);
    localStorage.setItem("title", e.target.value);
  };
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png, heic or jpeg)");
    }
  };

  const handleSetRating = (rating) => {
    setRating(rating);
    localStorage.setItem("rating", rating);
  };

  return (
    <>
      <button
        className="addNewBtn"
        onClick={(e) => {
          document.querySelector("form").style.display = "flex";
        }}
      >
        Legg til ny kaffetype
      </button>
      <form style={{ display: "none" }}>
        <input
          id="file-title"
          type="text"
          placeholder="Hva heter kaffetypen?"
          onChange={changeHandlerText}
          value={title}
        />
        <input id="file-notes" type="textarea" placeholder="Smaksnotater ..." />
        <div className="starRating">
          <StarRating rating={rating} setRating={handleSetRating} />
        </div>
        <label htmlFor="file-upload" className="custom-file-upload">
          Legg til bilde
        </label>
        <input id="file-upload" type="file" onChange={changeHandler} />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>Legger til {title} i databasen</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </>
  );
};
export default UploadForm;
