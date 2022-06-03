import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <section id="contact" className="row m-0">
      <section className="col-4 offset-2 my-3 ">
        <h2>Microbrasserie BARBEMOUSSE</h2>
        <p>La Rouelle, 14260 Bonnemaison</p>
        <br />
        <p>
          <i class="bi bi-shop"></i>Horaires d'ouverture : mer. 14h/19h et
          samedi 15h/19h30
        </p>
        <br />
        <p>
          <i class="bi bi-telephone"></i>06.70.28.70.45
        </p>
        <br />
        <p>
          <i class="bi bi-envelope-paper"></i>Courriel : b.barbemousse@gmail.com
        </p>
      </section>
      <form
        method="post"
        action="/traitement_formulaire.php"
        className="col-4  my-3"
        id="contactForm"
      >
        <div className="row col-12 g-1">
          <div className="col mb-0 form-floating ">
            <input
              type="text"
              className="form-control form-control-sm"
              id="nom"
              placeholder=" "
              name="nom"
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
          ></textarea>
          <label htmlFor="message">Votre message</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
