import { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actions } from "../store/curriculumSlice";
import { StyledCard } from "../styles/Card.styles";
import Modal from "./SubjectModal";

const CustomCard = (props) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { setSelectedSem } = actions;

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <StyledCard onClick={() => dispatch(setSelectedSem({ sem: props.sem }))}>
        <Card.Body onClick={handleShow}>
          <span>Sem {props.sem.number}</span>
          <span className="d-block">GPA {props.sem.gpa}</span>
        </Card.Body>
      </StyledCard>
      <Modal
        semNumber={props.sem.number}
        subjects={props.sem.subjects}
        show={show}
        onShow={handleShow}
        onClose={handleClose}
      />
    </>
  );
};

export default CustomCard;
