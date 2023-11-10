import React from "react";
import DyeingMan from "../HomePageAssets/dyeing.png";
import './EPCHero.css';

const EPCHero = () => {
  return (
    <div className="hero">
      <div className="left-col">
        <div className="heroTitle">
          Into The Art <br />
          Of Making <br />
          #KAFART2023
        </div>
        <div className="dash">
        </div>
        <div className="heroText">
          Celebrating the creative <br />
          processes and craftmanship <br />
          In Northern Nigeria and beyond.
        </div>
        <div className="hero-btn">Get your ticket</div>
        <div className="when">* Happening on 10th - 12th November, 2023</div>
      </div>
      <div className="right-col">
        <img src={DyeingMan} alt="Dyeing Man" />
      </div>
    </div>
  );
};

export default EPCHero;