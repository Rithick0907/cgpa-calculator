import React from "react";
import { Button, Modal } from "react-bootstrap";
import { LocalForm } from "react-redux-form";
import Table from "./Table";

const SubjectModal = ({ sem, show, subjects, onClose }) => {
  return (
    <LocalForm>
      <Modal size="xl" show={show} onHide={onClose} centered>
        <Modal.Header className="font-weight-bold " closeButton>
          Semester {sem}
        </Modal.Header>
        <Modal.Body>
          <Table sem={sem} subjects={subjects} />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button type="submit" variant="success" onClick={onClose}>
            Add Marks
          </Button>
        </Modal.Footer>
      </Modal>
    </LocalForm>
  );
};

export default SubjectModal;
