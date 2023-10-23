import React from "react";
import "./TwoImage.css";
import { Link } from "react-router-dom";

const TwoImage = ({ fashion1, fashion2, name1, name2, name3, name4 }) => {
  return (
    <div className="twoImage">
      <div className="two-left-col">
        <Link to='/artist-detail' state={{ image: fashion1, firstName: name1,
        secondName: name2 }} >
          <img src={fashion1} alt="Fashion Image" />
        </Link>
        <div className="person-details">
          <p>{name1}</p>
          <span className="circle"> </span> BY {name2}
        </div>
      </div>
      <div className="two-right-col">
        <Link to='/artist-detail' state={{ image: fashion2, firstName: name3,
        secondName: name4 }}>
          <img src={fashion2} alt="Fashion Image" />
        </Link>
        <div className="person-details">
          <p>{name3}</p>
          <span className="circle"> </span> BY {name4}
        </div>
      </div>
    </div>
  );
};

export default TwoImage;
