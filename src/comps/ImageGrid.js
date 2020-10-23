import React from "react";
import useFirestore from "../hooks/useFirestore";
import placeholderImg from "../images/placeholder.jpeg";
const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={placeholderImg} alt={doc.url} />
            <h2>{doc.title}</h2>
            <p>Rating: {doc.id}</p>
          </div>
        ))}
    </div>
  );
};
export default ImageGrid;
