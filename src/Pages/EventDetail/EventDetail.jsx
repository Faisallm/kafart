import React from "react";
import { useLocation } from "react-router-dom";
import "./EventDetail.css";
import Event1 from "../../Components/EventAssets/event1.png";
import Event2 from "../../Components/EventAssets/event2.png";
import Event3 from "../../Components/EventAssets/event3.png";
import Event0 from "../../Components/EventAssets/event0.png";

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
        <div class="scroller">
          <div class="scroll-container">
            <div class="scroll-image">
              <img src={Event1} alt="scroll-image" />
              <p>oladimeji odonsi</p>
            </div>
            <div class="scroll-image">
              <img src={Event2} alt="scroll-image" />
              <p>oladimeji odonsi</p>
            </div>
            <div class="scroll-image">
              <img src={Event2} alt="scroll-image" />
              <p>oladimeji odonsi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
