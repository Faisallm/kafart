import React from "react";
import "./Scroller.css";
import blob from "../../Components/BlogAssets/Ellipse 1.svg";

const Scroller = ({ image1, name1, name11, 
  image2, name2, name22, image3, name3, name33 }) => {
  return (
    <div className="scroller">
      <div className="scroll-container">
        {image1 ? (
          <div className="scroll-image">
            <img src={image1} alt="scroll-image" />
            <p>{name1}</p>
            <div>
              <img className="blob" src={blob} alt="Circle" /> BY {name11}
            </div>
          </div>
        ) : (
          ""
        )}

        {image2 ? (
          <div className="scroll-image">
            <img src={image2} alt="scroll-image" />
            <p>{name2}</p>
            <div>
              <img className="blob" src={blob} alt="Circle" /> BY {name22}
            </div>
          </div>
        ) : (
          ""
        )}

        {image3 ? (
          <div className="scroll-image">
            <img src={image3} alt="scroll-image" />
            <p>{name3}</p>
            <div>
              <img className="blob" src={blob} alt="Circle" /> BY {name33}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Scroller;
