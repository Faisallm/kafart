import React from "react";
import "./Hero.css";
import Art1 from "../HomePageAssets/art1.jpg";
import Art2 from "../HomePageAssets/art2.png";
import Art3 from "../HomePageAssets/art3.jpg";
import newart1 from "../../Components/newHeroAssets/newhero1.png";
import newart2 from "../../Components/newHeroAssets/newhero2.png";
import newart3 from "../../Components/newHeroAssets/newhero3.png";

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
            Explore a vibrant showcase of African artistry, from contemporary
            masterpieces to traditional crafts.
          </div>
        </div>
        <div className="right-col">
          <img src={newart1} alt="art1" />
        </div>
      </div>

      <div className="exhibition">
        <div className="left-col">
          <div className="exhibition-title">
            <span>1</span>Exhibitions
          </div>

          <div className="exhibition-text">
            Immerse yourself in the dynamic world of African performing arts,
            featuring music, dance, theatre, and captivating live performances.
          </div>
        </div>
        <div className="right-col">
          <img src={newart2} alt="art1" />
        </div>
      </div>

      <div className="exhibition">
        <div className="left-col">
          <div className="exhibition-title">
            <span>3</span>Culture
          </div>

          <div className="exhibition-text">
            Discover the richness of African heritage, from cuisine to
            craftsmanship, and engage in thought-provoking discussions about
            tradition and modernity.
          </div>
        </div>
        <div className="right-col">
          <img src={newart3} alt="art1" />
        </div>
      </div>

    </div>
  );
};

export default Hero;
