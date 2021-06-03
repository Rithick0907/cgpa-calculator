import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Card from "../components/Card";
import { actions } from "../store/curriculumSlice";
import StyledContainer from "../styles/Main.styles";

const Main = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (courseName) => {
    dispatch(actions.resetCurriculum());
    courseName = courseName.toLowerCase();
    history.push(`course/${courseName}`);
  };

  return (
    <StyledContainer>
      <Row>
        <Col sm={12} md={6}>
          <Card handleClick={handleClick} history={history} course="CS" />
        </Col>
        <Col sm={12} md={6}>
          <Card handleClick={handleClick} history={history} course="IT" />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Main;
