import React, { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Table from "./Table";
import CourseContext from "../context/courseContext";
import computeCGPA, { computeGPA } from "../utils/computeCGPA";

const SubjectModal = ({
  semNumber,
  show,
  subjects,
  subjectVariation,
  onClose,
}) => {
  const dispatch = useDispatch();
  const { course } = useContext(CourseContext);

  const handleSubmit = () => {
    onClose();
    dispatch((dispatch, getState) => {
      const curriculum = getState().curriculum;
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
