import React from "react";
import Fashion3 from "../FashionPageAssets/fashion3.png";
import "./OneImage.css";
import { Link } from "react-router-dom";

const OneImage = ({ fashion1, name1, name2 }) => {
  return (
    <div className="OneImage">
      <div>
        <Link to="/artist-detail" state={{ image: fashion1, name: name1 }}>
          <img src={fashion1} alt="Fashion Image" />
        </Link>
        <div className="person-details">
          <p>{name1}</p>
          <span className="circle"> </span> BY {name2}
        </div>
      </div>
    </div>
  );
};

export default OneImage;
