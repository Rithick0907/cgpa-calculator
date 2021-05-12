import { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actions } from "../store/curriculumSlice";
import { StyledCard } from "../styles/Card.styles";
import Modal from "./SubjectModal";

const CustomCard = ({ sem }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { setSelectedSem } = actions;

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <StyledCard onClick={() => dispatch(setSelectedSem(sem))}>
        <Card.Body onClick={handleShow}>Semester {sem.number} </Card.Body>
      </StyledCard>
      <Modal
        sem={sem.number}
        subjects={sem.subjects}
        show={show}
        onShow={handleShow}
        onClose={handleClose}
      />
    </>
  );
};

export default CustomCard;
