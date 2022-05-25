import React from "react";
import "./PointsDeVente.scss";
import { pointsDeVente } from "../../Data/pointsDeVente";
import VendeurCard from "./VendeurCard/VendeurCard";

export default function PointsDeVente() {
  return (
    <>
      {" "}
      <section className="mainArticle" id="pointDeVente">
        <div className="enTete">
          <h1>Où trouver nos bières ?</h1>
          <p>
            A emporter (<i className="fa-solid fa-cart-arrow-down"></i>)
          </p>
          <p>
            &nbsp;ou à consommer sur place (
            <i className="fa-solid fa-champagne-glasses"></i>)
          </p>
        </div>
        <article className="beerList">
          <ul>
            {pointsDeVente.map(
              ({ id, nom, adresse, cp_ville, pourAcheter, pourConsommer }) => (
                <VendeurCard
                  key={id}
                  nom={nom}
                  adresse={adresse}
                  cp_ville={cp_ville}
                  pourAcheter={pourAcheter}
                  pourConsommer={pourConsommer}
                />
              )
            )}
          </ul>
        </article>
      </section>
    </>
  );
}
