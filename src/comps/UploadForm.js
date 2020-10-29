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

  const changeHandlerTextarea = (e) => {
    localStorage.setItem("notes", e.target.value);
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

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      document.querySelector("form").style.display = "none";
      document.querySelector(".img-grid").style.display = "grid";
      document.querySelector(".backdrop").style.display = "none";
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "title") {
      localStorage.setItem("title", value);
    } else if (name === "notes") {
      localStorage.setItem("notes", value);
    }
  };

  return (
    <>
      <button
        className="addNewBtn"
        onClick={(e) => {
          document.querySelector("form").style.display = "flex";
          document.querySelector(".backdrop").style.display = "block";
          document.querySelector(".img-grid").style.display = "none";
        }}
      >
        Legg til ny kaffetype
      </button>
      <div
        className="backdrop"
        onClick={handleClick}
        style={{ display: "none" }}
      >
        <form style={{ display: "none" }}>
          <input
            id="file-title"
            type="text"
            name="title"
            placeholder="Hva heter kaffetypen?"
            onChange={(event) => onChangeHandler(event)}
            // value={value}
          />
          <textarea
            id="file-notes"
            name="notes"
            rows={5}
            cols={5}
            placeholder="Smaksnotater ..."
            onChange={(event) => onChangeHandler(event)}
          />
          <div className="starRating">
            <StarRating rating={rating} setRating={handleSetRating} />
          </div>
          <label htmlFor="file-upload" className="custom-file-upload">
            Legg til bilde
          </label>
          <input id="file-upload" type="file" onChange={changeHandler} />
          <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
          </div>
        </form>
      </div>
    </>
  );
};
export default UploadForm;
