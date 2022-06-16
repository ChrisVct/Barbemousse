import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function ModalSec() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (sessionStorage.getItem("isAdult") != "true") {
      handleShow();
    }
  }, []);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>Ohoy les mousses !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ce site est réservé aux mousses majeurs. Es-tu majeur ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Oui, je suis un grand !
          </Button>
          <Button variant="warning">Non, pas encore...</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
