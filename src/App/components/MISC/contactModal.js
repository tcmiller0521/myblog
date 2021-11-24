import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

function ContactModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="btn-alert p-2 rounded mb-5 text-light" onClick={handleShow}>
          Submit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thanks for reaching out! </Modal.Title>
          </Modal.Header>
          <Modal.Body>Someone will be in contact very shortly! In the meantime, feel free to continue exploring!</Modal.Body>
          <Modal.Footer>
            <Button className="btn-alert p-2 rounded text-light" onClick={handleClose}>
              Close
            </Button>
            <Button className="btn-alert p-2 rounded" onClick={handleClose}>
              <Link to="./#" className="text-decoration-none text-light">Back To Home</Link>
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default ContactModal;