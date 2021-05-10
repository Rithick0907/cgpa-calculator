import { useState } from "react";
import { Card } from "react-bootstrap";
import { StyledCard } from "../styles/Card.styles";
import Modal from "./SubjectModal";

const CustomCard = ({ val }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <StyledCard>
        <Card.Body onClick={handleShow}>Semester {val}</Card.Body>
      </StyledCard>
      <Modal show={show} onShow={handleShow} onClose={handleClose} />
    </>
  );
};

export default CustomCard;
