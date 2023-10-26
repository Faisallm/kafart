import React from "react";
import "./About.css";
import About1 from "../../Components/AboutAsset/about1.jpg";
import About2 from "../../Components/AboutAsset/about2.jpg";
import Blob from "../../Components/BlogAssets/Ellipse 1.svg";

const About = () => {
  return (
    <div className="about">
      <div className="heroSectionImage">
        <img src={About1} alt="Hero Section Image" />
      </div>
      <div className="aboutDetailsSection">
        <h1>
          The desire to bring our community together using creativity has also
          driven us to create KAFART.
        </h1>
        <p>
          KAFART is a platform intended to support creatives in the community by
          giving them the perfect platform to showcase and express themselves.
          The exhibition also seeks to put forth underrepresented African
          cultures, and encourage the redefinition of history and the
          reinvention of a vibrant future by African creatives.
        </p>
        <p>
          KAFART aims to establish the right channels to connect African
          creatives to a global audience. The event is also geared towards
          encouraging creatives to be environmentally responsible and promote
          eco -friendly crafts and ideas that can help improve the current state
          of the environment.
        </p>
      </div>
      <div className="aboutTeamsSection">
        <div className="team-card">
          <img src={About2} alt="Team Card Image" />
          <p>HENRY, AUTHUR</p>
          <div className="bloby">
            <img src={Blob} alt="Circle" /> By Faisal
          </div>
          <div className="buttons">
            <button>IG</button>
            <button>FB</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
