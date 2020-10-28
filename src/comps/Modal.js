import React, { useState } from "react";
import StarRating from "./StarRating";
import { projectFirestore } from "../firebase/config";
import Image from "./Image";
import Notes from "./Notes";

const Modal = ({ data, setData }) => {
  const [rating, setRating] = useState(data.star);
  const [notes, setNotes] = useState(data.notes);
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setData(null);
      window.location.reload(false);
    }
  };

  const changeHandlerTextarea = (e) => {
    setNotes(e.target.value);

    const collectionRef = projectFirestore.collection("images").doc(data.id);
    collectionRef.update({ notes: notes });
  };

  const handleSetRating = (rating) => {
    setRating(rating);

    const collectionRef = projectFirestore.collection("images").doc(data.id);
    collectionRef.update({ star: rating });
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <div className="modal-container">
        {data.url && (
          <div className="modal-img">
            <Image data={data.url} />
          </div>
        )}
        <div className="modal-content">
          {data.title && <h2>{data.title}</h2>}
          <textarea
            id="file-notes"
            rows={5}
            cols={5}
            placeholder="Smaksnotater ..."
            value={notes}
            onChange={changeHandlerTextarea}
          />
          {data.star && (
            <div className="modal-stars">
              {<StarRating rating={rating} setRating={handleSetRating} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
