import React, { useState } from "react";
import StarRating from "./StarRating";
import { projectFirestore } from "../firebase/config";
import Image from "./Image";

const ImageItem = ({ doc, setData }) => {
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
          setCurrentId(doc.id);
          setData(doc);
        }}
      >
        <Image data={doc.url} />
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
