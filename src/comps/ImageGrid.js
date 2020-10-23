import React from "react";
import { projectFirestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import placeholderImg from "../images/placeholder.jpeg";
import firebase from "firebase/app";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  function updateStar(doc) {
    let id = doc.id;
    const collectionRef = projectFirestore.collection("images").doc(id);
    collectionRef.update({ star: 5 });
  }

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => {
              setSelectedImg(doc.url);
              updateStar(doc);
            }}
          >
            <img src={placeholderImg} alt={doc.url} />
            <h2>{doc.title}</h2>
            <p>Rating: {doc.star}</p>
          </div>
        ))}
    </div>
  );
};
export default ImageGrid;
