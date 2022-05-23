import React from "react";
import "./NosBieres.scss";
import Biere1 from "../../../Assests/biere1.jpg";
import Biere2 from "../../../Assests/biere2.jpg";
import Biere3 from "../../../Assests/biere3.jpg";
import Biere4 from "../../../Assests/biere4.jpg";

export default function NosBieres() {
  return (
    <>
      <div className="container-fluid g-0" id="NosBieresWrapper">
        <section
          className="nosBieres-container row col-6 col-xl-5 offset-xl-1 d-flex flex-row g-0 "
          id="nosBieres"
        >
          <figure className="beerCard1 beerCard col-3">
            <img src={Biere1} alt="" />
          </figure>
          <figure className="beerCard2 beerCard col-3">
            <img src={Biere2} alt="" />
          </figure>
          <figure className="beerCard3 beerCard col-3">
            <img src={Biere3} alt="" />
          </figure>
          <figure className="beerCard4 beerCard col-3">
            <img src={Biere4} alt="" />
          </figure>
          <article className="beerPresentation0 beerPresentation col-6 col-xl-4">
            <h3>Sélectionner votre bière pour en savoir plus !</h3>
          </article>
          <article className="beerPresentation1 beerPresentation col-6 col-xl-4">
            <h3>La moussette</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              aliquid vitae dolor eaque unde, ipsa veniam at suscipit, neque
              tempore facere blanditiis et sunt similique cupiditate illo dicta
              delectus, velit ut. Atque impedit quia quibusdam eius totam,
              tenetur adipisci obcaecati odit doloribus nobis minus suscipit qui
              enim libero, sequi ad!
            </p>
          </article>
          <article className="beerPresentation2 beerPresentation col-6 col-xl-4">
            <h3>Beer2</h3>
          </article>
          <article className="beerPresentation3 beerPresentation col-6 col-xl-4">
            <h3>Beer3</h3>
          </article>
          <article className="beerPresentation4 beerPresentation col-6 col-xl-4">
            <h3>Beer4</h3>
          </article>
        </section>
      </div>
    </>
  );
}
