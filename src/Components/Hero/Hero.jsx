import React from "react";
import "./Hero.css";
import Art1 from "../HomePageAssets/art1.jpg";
import Art2 from "../HomePageAssets/art2.png";
import Art3 from "../HomePageAssets/art3.jpg";

const Hero = () => {
  return (
    <div className="heroo">
      <div className="brief">
        KAFART is a dynamic and multifaceted <br /> platform dedicated to
        showcasing and <br /> celebrating the rich tapestry of African <br />{" "}
        creativity through exhibitions, <br /> performances, and a deep
        exploration of art and culture.
      </div>

      <div className="exhibition">
        <div className="left-col">
          <div className="exhibition-title">
            <span>1</span>Exhibitions
          </div>

          <div className="exhibition-text">
            Explore a vibrant showcase of African artistry, from contemporary{" "}
            <br />
            masterpieces to traditional crafts.
          </div>
        </div>
        <div className="right-col">
          <img src={Art1} alt="art1" />
        </div>
      </div>
      <div className="exhibition" style={{ flexDirection: "row-reverse" }}>
        <div className="left-col">
          <div className="exhibition-title">
            <span>2</span>Perfomance
          </div>

          <div className="exhibition-text">
            Immerse yourself in the dynamic <br /> world of African performing
            arts <br />, featuring music, dance, theater, and <br /> captivating
            live performances.
          </div>
        </div>
        <div className="right-col">
          <img src={Art2} alt="art1" />
        </div>
      </div>
      <div className="exhibition">
        <div className="left-col">
          <div className="exhibition-title">
            <span>3</span>Culture
          </div>

          <div className="exhibition-text">
            Discover the richness of African <br /> heritage, from cuisine to
            craftsmanship, <br /> and engage in thought-provoking <br />{" "}
            discussions about tradition and modernity.
          </div>
        </div>
        <div className="right-col">
          <img src={Art3} alt="art1" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
