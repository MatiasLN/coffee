import React from "react";
import placeholderImg from "../images/placeholder.jpeg";

const Image = ({ data }) => {
  const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];

  if (LOCAL_DOMAINS.includes(window.location.hostname)) {
    return <img src={placeholderImg} alt={data.id} />;
  } else {
    return <img src={data.url} alt={data.id} />;
  }
};

export default Image;
