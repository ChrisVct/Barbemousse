import React, { useEffect, useState } from "react";
import { Modal, OverlayTrigger, Popover } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Footer() {
  //toogle "mentions variables"
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //toggle "Christophe VICHIT"
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center flex-wrap "
        style={{
          height: "auto",
          minHeight: "100px",
          backgroundColor: "#6d594d",
          color: "#f1ecd5",
          fontSize: "1rem",
        }}
      >
        <p className="m-0">© Microbrasserie Barbemousse 2022 -&nbsp; </p>
        <Button
          variant="link p-0"
          onClick={handleShow}
          style={{
            color: "#f1ecd5",
          }}
        >
          Mentions légales
        </Button>
        <p className="m-0">. Site réalisé par&nbsp;</p>
        <Button
          variant="link p-0"
          onClick={handleShow2}
          style={{
            color: "#f1ecd5",
          }}
        >
          Christophe VICHIT.
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mentions légales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <h3>Entreprise</h3>
          Raison sociale : <br />
          R.C.S : <br />
          SIRET : <br />
          Capital :<br />
          Date de Création : <br />
          Siège social :<br />
          Téléphone :
          <br />
          <br />
          <h3>Hébergement</h3>
          Ce site est hébergé sur....
          <br />
          <br />
          <h3>Crédits</h3>
          Crédits image :<br />
          https://www.pixabay.com/fr/ // Auteur : sirmarkdavid
          <br />
          Le photographe des bières
          <br />
          <br />
        </Modal.Body>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Vous pouvez adresser vos demandes à :
          <br />
          <br />
          vichit.christophe@gmail.com
          <br />
          <br />
        </Modal.Body>
      </Modal>
    </>
  );
}
