import React from "react";
import useFirestore from "../hooks/useFirestore";
import ImageItem from "./ImageItem";

const ImageGrid = ({ data, setData }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((singleItem) => (
          <ImageItem
            key={singleItem.id}
            singleItem={singleItem}
            data={data}
            setData={setData}
          />
        ))}
    </div>
  );
};
export default ImageGrid;
