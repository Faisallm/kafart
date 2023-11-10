import React from "react";
import "./Card.css";
import Caravan from '../../Components/BlogAssets/blog6.jpg';
import { Link } from "react-router-dom";

const Card = ({ image, title, blob, name }) => {
  return (
    <div className="card">
      <Link to="/blog-detail" state={{ title, image, name, image2 :Caravan  }}>
        <img src={image} alt="Desert Safari" className="faisal-card-image" />
      </Link>
      <p>{title}</p>
      <div>
        <img className="blob" src={blob} alt="Circle" /> BY {name}
      </div>
    </div>
  );
};

export default Card;
