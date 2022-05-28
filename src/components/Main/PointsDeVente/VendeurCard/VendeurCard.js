import React from "react";
import "./VendeurCard.scss";

export default function VendeurCard({
  nom,
  adresse,
  cp_ville,
  pourAcheter,
  pourConsommer,
}) {
  const icon =
    pourAcheter === "oui" ? (
      pourConsommer === "oui" ? (
        <span className=" d-flex align-items-center">
          <i className="bi bi-basket2 "></i>
          {/* <i className="fa-solid fa-cart-arrow-down"></i> */}
          <i className="bi bi-cup-straw"></i>
          {/* <i className="fa-solid fa-champagne-glasses"></i> */}
        </span>
      ) : (
        <span className=" d-flex align-items-center">
          <i className="bi bi-basket2 "></i>
          {/* <i className="fa-solid fa-cart-arrow-down d-flex align-items-center"></i> */}
        </span>
      )
    ) : (
      <span className=" d-flex align-items-center">
        <i className="bi bi-cup-straw "></i>
        {/* <i className="fa-solid fa-champagne-glasses"></i> */}
      </span>
    );
  return (
    <li className="vendeur-card col d-flex flex-wrap align-items-center my-1 fs-4 ">
      <h2 className="fw-bold flex-shrink-0 m-0 fs-4">{nom}</h2>
      <span className="d-flex align-items-center px-2 ">- {icon} -</span>
      <p className="flex-shrink-0 m-0 fs-6">
        {adresse} - {cp_ville}
      </p>
    </li>
  );
}
