import React from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "./Table";

const SubjectModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body>
        <Table />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SubjectModal;
