import React from "react";
import "./LaBrasserie.scss";
import brasseriePics from "./../../../Assests/brasseriePics.png";
import recyclage from "./../../../Assests/recyclage.mp4";

export default function LaBrasserie() {
  return (
    <>
      <div className="container-fluid p-0" id="laBrasserieWrapper">
        <section
          id="laBrasserie"
          className=" row col-12 col-xl-8 offset-xl-2 g-0 d-flex flex-column-reverse flex-md-row-reverse "
        >
          <figure className="col-12 col-md-6 ">
            <img src={brasseriePics} alt="" />
          </figure>
          <article className="col-12 col-md-6 px-3 pt-3 my-auto ">
            <h2 className="text-end">La Brasserie</h2>
            <p>
              &emsp;&emsp;La brasserie est installée à Bonnemaison, dans un lieu
              paisible où il fait bon vivre aux portes de la suisse normande.
              Elle se compose d’une salle de brassage, d’une salle de
              fermentation, d’une boutique et de zones de stockage, Je vous y
              propose des bières originales et brassées avec passion selon une
              méthode artisanale. La brasserie est en perpétuelle évolution avec
              pour objectifs principaux de vous proposer des bières de qualité,
              innovantes et dans le respect de l’environnement.
            </p>
          </article>
        </section>
        <section className=" row col-12 col-xl-8 offset-xl-2 g-0 d-flex flex-column-reverse flex-md-row-reverse ">
          <article className="col-12 col-md-6 px-3 pt-3 my-auto">
            <p>
              La majorité des déchets de la brasserie est par exemple
              revalorisée sur place (drèches de brasserie et résidus de houblons
              compostés ou pour l’alimentation de nos poules et chèvres,
              traitement des eaux par phyto épuration…) Un jardin potager
              fonctionnant sur les bases de la permaculture est également en
              création sur notre terrain et est intimement lié à la brasserie.
            </p>
          </article>
          <video controls className="col-12 col-md-6">
            <source src={recyclage} type="video/mp4" />
            <p>
              Votre navigateur ne prend pas en charge les vidéos HTML5. Voici{" "}
              <a href="myVideo.mp4">un lien pour télécharger la vidéo</a>.
            </p>
          </video>
        </section>
      </div>
    </>
  );
}
