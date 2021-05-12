import React from "react";
import { Button, Modal } from "react-bootstrap";
import { LocalForm } from "react-redux-form";
import Table from "./Table";

const SubjectModal = ({ semNumber, show, subjects, onClose }) => {
  return (
    <LocalForm onSubmit={(val) => console.log(val)}>
      <Modal size="xl" show={show} onHide={onClose} centered>
        <Modal.Header className="font-weight-bold " closeButton>
          Semester {semNumber}
        </Modal.Header>
        <Modal.Body>
          <Table semNumber={semNumber} subjects={subjects} />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button type="submit" variant="success" onClick={onClose}>
            Add Grade
          </Button>
        </Modal.Footer>
      </Modal>
    </LocalForm>
  );
};

export default SubjectModal;
