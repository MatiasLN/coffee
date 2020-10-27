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

  const Image = () => {
    const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];

    if (LOCAL_DOMAINS.includes(window.location.hostname)) {
      return <img src={placeholderImg} alt={doc.id} />;
    } else {
      return <img src={doc.url} alt={doc.id} />;
    }
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
        {Image()}
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
