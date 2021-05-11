import React from "react";
import { Button, Modal } from "react-bootstrap";
import { LocalForm } from "react-redux-form";
import Table from "./Table";

const SubjectModal = ({ show, subjects, onClose }) => {
  return (
    <LocalForm>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Body>
          <Table subjects={subjects} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </LocalForm>
  );
};

export default SubjectModal;
