import React, { useState } from "react";
import StarRating from "./StarRating";
import { projectFirestore } from "../firebase/config";
import Image from "./Image";

const ImageItem = ({ data, setData }) => {
  const [rating, setRating] = useState(data.star);
  const [id, setCurrentId] = useState(data.id);

  const handleSetRating = (rating) => {
    setRating(rating);

    const collectionRef = projectFirestore.collection("images").doc(id);
    collectionRef.update({ star: rating });
  };

  return (
    <div className="coffeItem">
      <div
        className="image"
        key={data.id}
        onClick={() => {
          setCurrentId(data.id);
          setData(data);
        }}
      >
        <Image data={data.url} />
      </div>
      <h2>{data.title}</h2>
      <div
        className="rating"
        onClick={() => {
          setCurrentId(data.id);
        }}
        data={data.id}
      >
        <StarRating rating={rating} setRating={handleSetRating} />
      </div>
    </div>
  );
};

export default ImageItem;
