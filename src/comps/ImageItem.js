import React, { useState } from "react";
import StarRating from "./StarRating";
import { projectFirestore } from "../firebase/config";
import Image from "./Image";

const ImageItem = ({ singleItem, setData }) => {
  const [rating, setRating] = useState(singleItem.star);
  const [id, setCurrentId] = useState(singleItem.id);

  const handleSetRating = (rating) => {
    setRating(rating);

    const collectionRef = projectFirestore.collection("images").doc(id);
    collectionRef.update({ star: rating });
  };

  return (
    <div className="coffeItem">
      <div
        className="image"
        key={singleItem.id}
        onClick={() => {
          setCurrentId(singleItem.id);
          setData(singleItem);
        }}
      >
        <Image data={singleItem.url} />
      </div>
      <h2>{singleItem.title}</h2>
      <div
        className="rating"
        onClick={() => {
          setCurrentId(singleItem.id);
        }}
        data={singleItem.id}
      >
        <StarRating rating={rating} setRating={handleSetRating} />
      </div>
    </div>
  );
};

export default ImageItem;
