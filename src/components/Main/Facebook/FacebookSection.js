import React from "react";
import "./FacebookSection.scss";

export default function FacebookSection() {
  return (
    <div className="container-fluid g-0">
      <section className="mainArticle row mx-auto" id="fbSection">
        <article className="col-12 col-lg-6 col-xl-4 ms-auto text-center text-lg-end">
          <i className="fa-brands fa-facebook "></i>
          <h2>
            Retrouvez toute l'actualité sur{" "}
            <a
              href="https://www.facebook.com/Microbrasserie-Barbemousse-109357753889418/"
              target="_blank"
            >
              <strong>notre page Facebook</strong>
            </a>{" "}
            !
          </h2>
          <h4>
            Suivez toute l’actualité de la Brasserie sur notre page Facebook.
            N’hésitez pas à liker et à partager !
          </h4>
        </article>
        <div className="d-none d-md-block col-6 col-xl-4 m-auto me-lg-auto">
          <div
            className="fb-like-box"
            data-href="https://www.facebook.com/Microbrasserie-Barbemousse-109357753889418/"
            data-width="400"
            data-height="600"
            data-colorscheme="light"
            data-show-faces="false"
            data-header="false"
            data-stream="true"
            data-show-border="false"
          ></div>
        </div>
      </section>
    </div>
  );
}
