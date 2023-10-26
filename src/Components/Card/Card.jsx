import React from "react";
import './Card.css';

const Card = ({ image, title, blob, name }) => {
  return (
    <div className="card">
      <img src={image} alt="Desert Safari" />
      <p>{title}</p>
      <div>
        <img className="blob" src={blob} alt="Circle" /> BY {name}
      </div>
    </div>
  );
};

export default Card;
