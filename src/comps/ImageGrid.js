import React, { useState } from "react";
import { projectFirestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import placeholderImg from "../images/placeholder.jpeg";
import StarRating from "./StarRating";
import useLocalhost from "../hooks/useLocalhost";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  const [newRating, setRating] = useState(null);
  const [id, setCurrentId] = useState(0);

  const handleSetRating = (newRating) => {
    let updatediId = localStorage.getItem("id");
    console.log(updatediId);
    setRating(newRating);
    localStorage.setItem("rating", newRating);
    let updatedRating = localStorage.getItem("rating", newRating);
    console.log(newRating);

    const collectionRef = projectFirestore.collection("images").doc(updatediId);
    collectionRef.update({ star: updatedRating });
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
              localStorage.setItem("currentStar", doc.star);
            }}
          >
            {useLocalhost ? (
              <img src={placeholderImg} alt={doc.id} />
            ) : (
              <img src={doc.url} alt={doc.id} />
            )}
            {/* <img src={placeholderImg} alt={doc.id} /> */}
            <h2>{doc.title}</h2>
            <div
              className="rating"
              onClick={() => {
                localStorage.setItem("id", doc.id);
                setCurrentId(doc.id);
                setRating(doc.star);
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
