import React, { useState } from "react";
import { projectFirestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import placeholderImg from "../images/placeholder.jpeg";
import StarRating from "./StarRating";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  const [rating, setRating] = useState(0);
  const [id, setCurrentId] = useState(0);

  const handleSetRating = (newRating) => {
    console.log(localStorage.getItem("id"));
    if (newRating === rating) {
      setRating(0);
    } else {
      setRating(newRating);
    }

    const collectionRef = projectFirestore
      .collection("images")
      .doc(localStorage.getItem("id"));
    collectionRef.update({ star: newRating });
  };

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => {
              setSelectedImg(doc.url);
            }}
          >
            <img src={doc.url} alt={doc.url} />
            <h2>{doc.title}</h2>
            <div
              className="rating"
              onClick={() => {
                localStorage.setItem("id", doc.id);
                setCurrentId(doc.id);
              }}
              data={doc.id}
            >
              <StarRating rating={doc.star} setRating={handleSetRating} />
            </div>
          </div>
        ))}
    </div>
  );
};
export default ImageGrid;
