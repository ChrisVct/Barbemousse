import React from "react";
import "./FacebookSection.scss";

export default function FacebookSection() {
  return (
    <div className="container-fluid">
      <section className="mainArticle row" id="fbSection">
        <div
          className="fb-like-box col-4 offset-2"
          data-href="https://www.facebook.com/Microbrasserie-Barbemousse-109357753889418/"
          data-width="400"
          data-height="600"
          data-colorscheme="light"
          data-show-faces="false"
          data-header="false"
          data-stream="true"
          data-show-border="false"
        ></div>
        <article className="col-4">
          <i className="fa-brands fa-facebook "></i>
          <h2>Retrouvez toute l'actualité sur notre page Facebook !</h2>
          <h4>
            Suivez toute l’actualité de la Brasserie sur notre page Facebook.
            N’hésitez pas à liker et à partager !
          </h4>
        </article>
      </section>
    </div>
  );
}
