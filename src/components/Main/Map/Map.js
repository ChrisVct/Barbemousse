import React from "react";
import "./Map.scss";

export default function Map() {
  return (
    <section id="map">
      <div className="row col-12 col-xxl-10 offset-xxl-1 h-100 g-0">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1mztsKMyMu2jd8Y-9O0r_yTqi-WB3VyQ&ehbc=2E312F"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </section>
  );
}
