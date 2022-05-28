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
          <h2 className="fw-bold">Où trouver nos bières ?</h2>
          <h5 className="enTete text-center">
            A emporter (<i className="bi bi-basket2"></i>) ou à consommer sur
            place (<i className="bi bi-cup-straw "></i>)
          </h5>
        </div>
        <div className=" col-12 col-xl-11  offset-xxl-2">
          <ul className="row row-cols-md-2 row-cols-1 g-0">
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
        </div>
      </section>
    </>
  );
}
