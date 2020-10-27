import React from "react";
import useFirestore from "../hooks/useFirestore";
import ImageItem from "./ImageItem";

const ImageGrid = ({ data, setData }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <ImageItem key={doc.id} doc={doc} data={data} setData={setData} />
        ))}
    </div>
  );
};
export default ImageGrid;
