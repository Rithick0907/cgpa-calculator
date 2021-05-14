import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LocalForm } from "react-redux-form";
import { selectCurriculum } from "../store/curriculumSlice";
import { computeGPA } from "../utils/computeCGPA";
import Table from "./Table";

const SubjectModal = ({ semNumber, show, subjects, onClose }) => {
  const curriculum = useSelector(selectCurriculum);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const semIndex = curriculum.findIndex((elem) => elem.visited === true);
    onClose();
    computeGPA(curriculum[semIndex], dispatch);
  };

  return (
    <LocalForm>
      <Modal size="xl" show={show} onHide={onClose} centered>
        <Modal.Header className="font-weight-bold " closeButton>
          Semester {semNumber}
        </Modal.Header>
        <Modal.Body>
          <Table semNumber={semNumber} subjects={subjects} />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button onClick={handleSubmit} type="submit" variant="success">
            Add Grade
          </Button>
        </Modal.Footer>
      </Modal>
    </LocalForm>
  );
};

export default SubjectModal;
