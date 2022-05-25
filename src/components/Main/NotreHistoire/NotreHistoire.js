import React from "react";
import "./NotreHistoire.scss";
import notreHistoirePics1 from "./../../../Assests/notreHistoirePics1.jpg";

export default function NotreHistoire() {
  return (
    <>
      <div className="container-fluid g-0 " id="notreHistoireWrapper">
        <section
          id="notreHistoire"
          className=" row col-12 col-xl-8 offset-xl-2 g-0 d-flex flex-column-reverse flex-md-row"
        >
          <figure className="col-12 col-md-6 ">
            <img src={notreHistoirePics1} alt="" />
          </figure>
          <article className="col-12 col-md-6 px-3 pt-3">
            <h1>Notre histoire</h1>
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
