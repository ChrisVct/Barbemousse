import React from "react";
import "./LaBrasserie.scss";
import BreweryPics1 from "./../../../Assests/breweryPics1.jpg";

export default function LaBrasserie() {
  return (
    <>
      <div className="container-fluid p-0" id="laBrasserieWrapper">
        <section
          id="LaBrasserie"
          className=" row col-12 col-xl-8 offset-xl-2 g-0 d-flex flex-column-reverse flex-md-row-reverse "
        >
          <figure className="col-12 col-md-6 ">
            <img src={BreweryPics1} alt="" />
          </figure>
          <article className="col-12 col-md-6 px-3 pt-3">
            <h1>La Brasserie</h1>
            <p>
              &emsp;&emsp;Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Expedita dicta, eius quam provident odit voluptas iusto
              laboriosam delectus accusantium reiciendis veniam quasi cum iure
              molestias assumenda nemo alias in dolor nihil nostrum error saepe
              laborum suscipit nobis? Hic inventore necessitatibus quos nemo
              dolore animi asperiores placeat iure? Repellendus, itaque
              veritatis!
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
