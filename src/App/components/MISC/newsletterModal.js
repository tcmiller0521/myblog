import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

function NewsletterModal() {
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
            <Modal.Title>Thanks for subscribing!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Keep a lookout in your email for updates from us!</Modal.Body>
          <Modal.Footer>
            <Button className="btn-alert p-2 rounded text-light" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default NewsletterModal;