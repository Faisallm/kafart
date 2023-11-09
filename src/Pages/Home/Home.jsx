import React from "react";
import EPCHero from "../../Components/EPCHero/EPCHero";
import Hero from "../../Components/Hero/Hero";
import Scroller from "../../Components/Scroller/Scroller";
import "./Home.css";
import fashion1 from "../../Components/FashionPageAssets/fashion1.png";
import fashion2 from "../../Components/FashionPageAssets/fashion6.jpg";
import fashion3 from "../../Components/FashionPageAssets/fashion4.png";
import artist1 from "../../Components/ArtistAssets/artist1.jpg";
import artist2 from "../../Components/ArtistAssets/artist2.jpg";
import artist3 from "../../Components/ArtistAssets/artist4.jpg";
import Card from "../../Components/Card/Card";
import Bottom1 from "../../Components/HomePageAssets/b1.png";
import Bottom2 from "../../Components/HomePageAssets/b2.png";
import Bottom3 from "../../Components/HomePageAssets/b3.png";
import Bottom4 from "../../Components/HomePageAssets/b4.png";
import Blob from "../../Components/BlogAssets/Ellipse 1.svg";
import Event1 from "../../Components/EventAssets/event1.png";
import Event2 from "../../Components/EventAssets/event2.png";

const Home = () => {
  
  return (
    <div className="home" data-scroll-container>
      <EPCHero />
      <Hero />
      <div className="driver" data-scroll-section>
        <div className="home-title" >
          <p data-scroll>
            Fashion Designers<span>12</span>
          </p>
          <button  data-scroll data-scroll-speed="2">View All</button>
        </div>
        <div className="driver-content" data-scroll>
          Explore their creations, discover the inspirations behind their
          designs, and delve into the world of fabrics, colors, and forms that
          define their work.
        </div>
        <Scroller
          image1={Event1}
          name1="oladimeji odonsi"
          image2={Event2}
          name2="oladimeji odonsi"
          image3={Event2}
          name3="oladimeji odonsi"
        />
        <button className="second-driver-btn">View All</button>
      </div>
      <div className="driver">
        <div className="home-title">
          <p>
            Visual Artist<span>12</span>
          </p>
          <button>View All</button>
        </div>
        <div className="driver-content">
          Discover the interplay of colors, the depth of emotions, and the
          boundless imagination that drives these artists to create.
        </div>
        <Scroller
          image1={Event1}
          name1="oladimeji odonsi"
          image2={Event2}
          name2="oladimeji odonsi"
          image3={Event2}
          name3="oladimeji odonsi"
        />
        <button className="second-driver-btn">View All</button>
      </div>
      <div className="bottom-home-page">
        <div className="bottom-left-column">
          <p>From our blog</p>
          <p>
            You'll find a treasure trove of insights, ideas, and stories that
            span a wide spectrum of Africa and beyond.
          </p>
          <button>view all</button>
        </div>
        <div className="bottom-right-column">
          <div className="cards">
            <Card
              image={Bottom1}
              title="HOW I WAS INSPIRED BY THE SAHARA"
              blob={Blob}
              name="Ganeeyat Sani"
            />
            <Card
              image={Bottom2}
              title="HOW I WAS INSPIRED BY THE SAHARA"
              blob={Blob}
              name="Ganeeyat Sani"
            />
            <Card
              image={Bottom3}
              title="HOW I WAS INSPIRED BY THE SAHARA"
              blob={Blob}
              name="Ganeeyat Sani"
            />
            <Card
              image={Bottom4}
              title="HOW I WAS INSPIRED BY THE SAHARA"
              blob={Blob}
              name="Ganeeyat Sani"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
