import React from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import StyledContainer from "../styles/Main.styles";
import Card from "../components/Card";

const Main = () => {
  const history = useHistory();

  const handleClick = (courseName) => {
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
