import React from "react";
import "./NotreHistoire.scss";
import histoirePics from "./../../../Assests/histoirePics.jpg";

export default function NotreHistoire() {
  return (
    <>
      <div className="container-fluid g-0 " id="notreHistoireWrapper">
        <section
          id="notreHistoire"
          className=" row col-12 col-xl-8 offset-xl-2 g-0 d-flex flex-column-reverse flex-md-row"
        >
          <figure className="col-12 col-md-6 ">
            <img src={histoirePics} alt="" />
          </figure>
          <article className="col-12 col-md-6 px-3 pt-3  my-auto">
            <h2>L’histoire de la brasserie</h2>
            <p>
              &emsp;&emsp;Passionné depuis longtemps par le monde brassicole,
              j’ai commencé à brasser mes premières bières en 2014 dans le
              garage familial. S’en est suivi un long apprentissage passant par
              pas mal d’essais et notamment par du bénévolat dans une petite
              brasserie locale. Désireux de faire partager ma passion et d’en
              vivre, c’est en 2019 que j’ouvre enfin ma propre brasserie à
              Bonnemaison. Après trois ans de rénovation d’une ancienne ferme
              dans un petit coin tranquille aux portes de la suisse normande,
              cet endroit deviendra mon lieu de travail et lieu de vie.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
