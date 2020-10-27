import React, { useState } from "react";
import placeholderImg from "../images/placeholder.jpeg";
import StarRating from "./StarRating";
import useLocalhost from "../hooks/useLocalhost";
import { projectFirestore } from "../firebase/config";

const ImageItem = ({ setSelectedImg, doc }) => {
  const [rating, setRating] = useState(doc.star);
  const [id, setCurrentId] = useState(doc.id);

  const handleSetRating = (rating) => {
    setRating(rating);

    const collectionRef = projectFirestore.collection("images").doc(id);
    collectionRef.update({ star: rating });
  };

  return (
    <div className="coffeItem">
      <div
        className="image"
        key={doc.id}
        onClick={() => {
          setSelectedImg(doc.url);
          setCurrentId(doc.id);
        }}
      >
        {useLocalhost ? (
          <img src={placeholderImg} alt={doc.id} />
        ) : (
          <img src={doc.url} alt={doc.id} />
        )}
      </div>
      <h2>{doc.title}</h2>
      <div
        className="rating"
        onClick={() => {
          setCurrentId(doc.id);
        }}
        data={doc.id}
      >
        <StarRating rating={rating} setRating={handleSetRating} />
      </div>
    </div>
  );
};

export default ImageItem;
