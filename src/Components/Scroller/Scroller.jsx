import React from "react";
import "./Scroller.css";

const Scroller = ({ image1, name1, image2, name2, image3, name3 }) => {
  return (
    <div className="scroller">
      <div className="scroll-container">
        {image1 ? (
          <div className="scroll-image">
            <img src={image1} alt="scroll-image" />
            <p>{name1}</p>
          </div>
        ) : (
          ""
        )}

        {image2 ? (
          <div className="scroll-image">
            <img src={image2} alt="scroll-image" />
            <p>{name2}</p>
          </div>
        ) : (
          ""
        )}

        {image3 ? (
          <div className="scroll-image">
            <img src={image3} alt="scroll-image" />
            <p>{name3}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Scroller;
