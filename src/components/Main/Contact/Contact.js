import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <section id="contact" className="row">
      <section className="col-4 offset-2" style={{ border: "2px solid black" }}>
        <p>text ici</p>
      </section>
      <form action="post" className="col-4  my-3">
        <div className="row col-12 g-1">
          <div className="col mb-0 form-floating ">
            <input
              type="text"
              className="form-control form-control-sm"
              id="floatingNom"
              placeholder=" "
            />
            <label htmlFor="floatingNom">Nom</label>
          </div>
          <div className="col mb-0 form-floating  ">
            <input
              type="text"
              className="form-control form-control-sm"
              id="floatingPrenom"
              placeholder=" "
            />
            <label htmlFor="floatingPrenom"> Prénom</label>
          </div>
        </div>
        <div className="mb-0 form-floating my-3 ">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder=" "
          />
          <label htmlFor="floatingEmail">Courriel</label>
        </div>
        <div className="form-floating my-3">
          <textarea
            className="form-control"
            placeholder=" "
            id="floatingTextarea"
            style={{ height: "200px" }}
          ></textarea>
          <label htmlFor="floatingTextarea">Votre message</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
