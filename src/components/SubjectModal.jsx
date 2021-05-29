import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import computeCGPA, { computeGPA } from "../utils/computeCGPA";
import Table from "./Table";

const SubjectModal = ({
  semNumber,
  show,
  subjects,
  subjectVariation,
  onClose,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    onClose();
    dispatch((dispatch, getState) => {
      const curriculum = getState().curriculum;
      const course = getState().course;
      const semIndex = curriculum.findIndex((elem) => elem.visited === true);

      computeGPA(curriculum[semIndex], dispatch, course);

      const filteredCurriculum = getState().curriculum.filter(
        (elem) => elem.gpa > 0
      );

      computeCGPA(filteredCurriculum, dispatch, course);
    });
  };

  return (
    <Form>
      <Modal size="xl" show={show} onHide={onClose} centered>
        <Modal.Header className="font-weight-bold " closeButton>
          Semester {semNumber}
        </Modal.Header>
        <Modal.Body>
          <Table
            semNumber={semNumber}
            subjects={subjects}
            subjectVariation={subjectVariation}
          />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button onClick={handleSubmit} type="submit" variant="success">
            Add Grade
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default SubjectModal;
