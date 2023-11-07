import React from "react";
import "./Events.css";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="events">
      <p className="event-title">Our events</p>
      <div className="events-cards">
        <Link to="/events-detail" state={{ title: "#KAFART 2023" }}>
          <div className="event-card">
            <div className="card-title">#KAFART <span>2023</span></div>
            <div className="card-ticket">REGISTER</div>
          </div>
        </Link>

        <Link to="/events-detail" state={{ title: "#KAFART 2022" }}>
          <div className="events-cards">
            <div className="event-card">
              <div className="card-title">#KAFART <span>2022</span></div>
              <div className="card-ticket">EXplore past event</div>
            </div>
          </div>
        </Link>

        <Link to="/events-detail" state={{ title: "#KAFART 2021" }}>
          <div className="events-cards">
            <div className="event-card">
              <div className="card-title">#KAFART <span>2021</span></div>
              <div className="card-ticket">EXplore past event</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Events;
