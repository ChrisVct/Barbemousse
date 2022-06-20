import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <section id="contact" className="row m-0">
      <section className="col-11 col-md-6 col-xl-4  m-auto my-3">
        <h1>
          <strong> Microbrasserie BARBEMOUSSE</strong>
        </h1>
        <h3>Mathieu WALON</h3>
        <p>
          <br />
          <i className="bi bi-shop"></i>
          &emsp;La Rouelle, 14260 Bonnemaison
        </p>
        <br />
        <p>
          <i className="bi bi-clock"></i> &emsp;Horaires d'ouverture :
          <br />
          &emsp;&emsp;&emsp;Mercredi : 14h-19h
          <br />
          &emsp;&emsp;&emsp;Samedi : 15h/19h30
        </p>
        <br />
        <p>
          <i className="bi bi-telephone"></i>&emsp;06.70.28.70.45
        </p>
        <br />
        <p>
          <i className="bi bi-envelope-paper"></i>&emsp; b.barbemousse@gmail.com
        </p>
      </section>
      <form
        method="post"
        action="/traitement_formulaire.php"
        className="col-11 col-md-6 col-xl-4 m-auto my-3"
        id="contactForm"
        novalidate
      >
        <div className="row col-12 g-1">
          <div className="col mb-0 form-floating ">
            <input
              type="text"
              className="form-control form-control-sm"
              id="nom"
              placeholder=" "
              name="nom"
              required
            />
            <label htmlFor="nom">Nom</label>
          </div>
          <div className="col mb-0 form-floating  ">
            <input
              type="text"
              className="form-control form-control-sm"
              id="prenom"
              placeholder=" "
              name="prenom"
              required
            />
            <label htmlFor="prenom"> Prénom</label>
          </div>
        </div>
        <div className="mb-0 form-floating my-3 ">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder=" "
            name="email"
            required
          />
          <label htmlFor="email">Courriel</label>
        </div>
        <div className="form-floating my-3">
          <textarea
            className="form-control"
            placeholder=" "
            id="message"
            name="message"
            style={{ height: "200px" }}
            required
          ></textarea>
          <label htmlFor="message">Votre message</label>
        </div>
        <div className="col text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}
