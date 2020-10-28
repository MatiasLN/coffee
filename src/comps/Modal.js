import React, { useState } from "react";
import StarRating from "./StarRating";
import { projectFirestore } from "../firebase/config";
import Image from "./Image";

const Modal = ({ data, setData }) => {
  const [rating, setRating] = useState(data.star);
  console.log(data);
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setData(null);
    }
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
