import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center flex-wrap "
        style={{ height: "50px", backgroundColor: "#6d594d", color: "#f1ecd5" }}
      >
        <p className="m-0">© Microbrasserie Barbemousse 2022 -&nbsp; </p>
        <button
          type="button"
          className="btn btn-link p-0"
          data-bs-toggle="modal"
          data-bs-target="#mentionsLegales"
          style={{
            color: "#f1ecd5",
          }}
        >
          Mentions légales
        </button>
        <p className="m-0">. Site réalisé par&nbsp;</p>
        <button
          type="button"
          className="btn btn-link p-0"
          data-bs-toggle="modal"
          data-bs-target="#christopheVichitModal"
          style={{
            color: "#f1ecd5",
          }}
        >
          Christophe VICHIT.
        </button>
      </div>
      <div
        className="modal fade "
        id="mentionsLegales"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{
          padding: "0",
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Mentions légales
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Raison sociale : <br />
              R.C.S : <br />
              SIRET : <br />
              Capital :<br />
              Date de Création : <br />
              Siège social :<br />
              Téléphone :
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="christopheVichitModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Contact
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Site personnel en cours de construction. Vous pouvez me contacter
              à l'adresse suivante : <br />
              <br /> <strong>vichit.christophe@gmail.com</strong>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
