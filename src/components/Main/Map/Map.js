import React from "react";
import "./Map.scss";

export default function Map() {
  return (
    <section id="map">
      <div className="row col-12 col-xxl-10 offset-xxl-1 g-3 text-center h-25">
        <p className="text-center">
          <span className="fs-3 fw-bold">
            {" "}
            Où trouver ces p'tites mousses ??!
          </span>
          <ul>
            <li>
              <i className="bi bi-shop"></i>Directement à la brasserie
              (mer.14h/19h - sam.15h/19h30)<i className="bi bi-cup-straw"></i>
            </li>
            <li>
              <i className="bi bi-cup-straw"></i>Aux points de
              vente/consommation indiqués ci-dessous
              <i className="bi bi-cart"></i>
            </li>
            <li>
              <i className="bi bi-basket2"></i>Au marché d'Aunay-Sur-Odon, le
              samedi matin<i className="bi bi-basket2"></i>
            </li>
            <li>
              <i className="bi bi-calendar-date"></i>
              Et lors de certains évènements (liker la page Facebook rester
              informés !)
              <i className="bi bi-facebook"></i>
            </li>
          </ul>
        </p>
      </div>
      <div className="row col-12 col-xxl-10 offset-xxl-1 h-75 g-0">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1mztsKMyMu2jd8Y-9O0r_yTqi-WB3VyQ&ehbc=2E312F"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </section>
  );
}
