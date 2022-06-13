import React, { useEffect, useState } from "react";
import { Modal, OverlayTrigger, Popover } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center flex-wrap "
        style={{ height: "50px", backgroundColor: "#6d594d", color: "#f1ecd5" }}
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
        <OverlayTrigger
          trigger="click"
          key="top"
          placement="top"
          overlay={
            <Popover id={`popover-positioned-top`}>
              <Popover.Header as="h3">{`Contactez-moi !`}</Popover.Header>
              <Popover.Body>vichit.christophe@gmail.com</Popover.Body>
            </Popover>
          }
        >
          <Button
            variant="link p-0 "
            style={{
              color: "#f1ecd5",
            }}
          >
            Christophe VICHIT.
          </Button>
        </OverlayTrigger>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mentions légales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          Raison sociale : <br />
          R.C.S : <br />
          SIRET : <br />
          Capital :<br />
          Date de Création : <br />
          Siège social :<br />
          Téléphone :
        </Modal.Body>
      </Modal>
    </>
  );
}
