import React from "react";
import { useLocation } from "react-router-dom";
import "./EventDetail.css";
import Event1 from "../../Components/EventAssets/event1.png";
import Event2 from "../../Components/EventAssets/event2.png";
import Event3 from "../../Components/EventAssets/event3.png";
import Event0 from "../../Components/EventAssets/event0.png";
import Scroller from "../../Components/Scroller/Scroller";
import newEvent1 from "../../Components/newEventAssets/newevent1.png";
import newEvent2 from "../../Components/newEventAssets/newevent2.png";
import newEvent3 from "../../Components/newEventAssets/newevent3.png";
import newEvent4 from "../../Components/newEventAssets/newevent4.png";
import newEvent5 from "../../Components/newEventAssets/newevent5.png";

const EventDetail = () => {
  const location = useLocation();
  const { title } = location.state;
  return (
    <div className="event-detail">
      <div className="little-title">
        events <span>/{title}</span>
      </div>
      <div className="main-title">{title}</div>
      <ul className="main-stats">
        <li>29 april</li>
        <li>1k+ audiences</li>
        <li>20 designers</li>
        <li>10 artists</li>
        <li>10 exhibitions</li>
      </ul>
      <div className="intro-text">
        Our exhibitions in 2021 were a testament to the diversity and depth of
        African creativity. From contemporary masterpieces that pushed the
        boundaries of artistic expression to traditional crafts that celebrated
        heritage, each showcase was a captivating journey into the heart of
        African art. We witnessed vibrant colors, intricate details, and
        thought-provoking narratives that left a lasting impression on all who
        visited.
      </div>
      <div className="gallery">
        <div className="gallery-title">galleria</div>
        <Scroller
          image1={newEvent1}
          name1="oladimeji odonsi"
          image2={newEvent2}
          name2="oladimeji odonsi"
          image3={newEvent3}
          name3="oladimeji odonsi"
          image4={newEvent4}
          name4="oladimeji odonsi"
          image5={newEvent5}
          name5="oladimeji odonsi"
        />
      </div>
      <div className="intro-text last">
        The performing arts took center stage at KAFART 2021, where dance,
        music, theater, and live performances captured hearts and minds. The
        stage came alive with the energy and passion of African performers,
        weaving stories and emotions that resonated deeply with our audiences.
        It was a year of rhythmic beats, graceful movements, and the powerful
        voice of African talent.
      </div>
      <div className="base-image">
        <img src={Event0} />
        Recap Video for kafart 2021
      </div>
    </div>
  );
};

export default EventDetail;
