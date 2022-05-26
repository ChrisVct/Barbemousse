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
          <i className="fa-solid fa-cart-arrow-down"></i>
          <i className="fa-solid fa-champagne-glasses"></i>
        </span>
      ) : (
        <span className=" d-flex align-items-center">
          <i className="fa-solid fa-cart-arrow-down d-flex align-items-center"></i>
        </span>
      )
    ) : (
      <span className=" d-flex align-items-center">
        <i className="fa-solid fa-champagne-glasses"></i>
      </span>
    );
  return (
    <li className="vendeur-card d-flex align-items-center">
      <h2 className="fs-4 fw-bold">{nom}</h2>
      <span className="d-flex align-items-center px-2">- {icon} -</span>
      <p>{adresse} - </p>
      <p>{cp_ville} </p>
    </li>
  );
}
