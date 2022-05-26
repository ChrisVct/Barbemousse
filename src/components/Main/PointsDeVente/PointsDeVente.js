import React from "react";
import "./PointsDeVente.scss";
import { pointsDeVente } from "../../Data/pointsDeVente";
import VendeurCard from "./VendeurCard/VendeurCard";

export default function PointsDeVente() {
  return (
    <>
      {" "}
      <section className="mainArticle" id="pointDeVente">
        <div>
          <h2>Où trouver nos bières ?</h2>
          <h4 className="enTete text-center">
            A emporter (<i className="fa-solid fa-cart-arrow-down"></i>) ou à
            consommer sur place (
            <i className="fa-solid fa-champagne-glasses"></i>)
          </h4>
        </div>
        <article className="beerList ">
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
