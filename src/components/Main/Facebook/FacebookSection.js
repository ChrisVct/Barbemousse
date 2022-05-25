import React from "react";
import "./FacebookSection.scss";

export default function FacebookSection() {
  return (
    <div className="container-fluid">
      <section className="mainArticle row" id="fbSection">
        <div
          className="fb-like-box col-4 d-none d-md-block offset-lg-1 offset-xl-2"
          data-href="https://www.facebook.com/Microbrasserie-Barbemousse-109357753889418/"
          data-width="400"
          data-height="600"
          data-colorscheme="light"
          data-show-faces="false"
          data-header="false"
          data-stream="true"
          data-show-border="false"
        ></div>
        <article className="col- 12 col-md-4 offset-md-3 offset-lg-2 offset-xl-1">
          <i className="fa-brands fa-facebook "></i>
          <h2>
            Retrouvez toute l'actualité sur{" "}
            <a href="https://www.facebook.com/Microbrasserie-Barbemousse-109357753889418/">
              notre page Facebook
            </a>{" "}
            !
          </h2>
          <h4>
            Suivez toute l’actualité de la Brasserie sur notre page Facebook.
            N’hésitez pas à liker et à partager !
          </h4>
        </article>
      </section>
    </div>
  );
}
