import React from "react";
import useFirestore from "../hooks/useFirestore";
import ImageItem from "./ImageItem";

const ImageGrid = ({ data, setData, rating, setRating }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((item) => (
          <ImageItem
            key={item.id}
            data={item}
            setData={setData}
            rating={item.star}
            setRating={setRating}
          />
        ))}
    </div>
  );
};
export default ImageGrid;
