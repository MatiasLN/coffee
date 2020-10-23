import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpg", "image/jpeg", "image/heic"];

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

  return (
    <form>
      <input
        id="file-title"
        type="text"
        placeholder="Hva heter kaffetypen?"
        onChange={changeHandlerText}
        value={title}
      />
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
  );
};
export default UploadForm;
