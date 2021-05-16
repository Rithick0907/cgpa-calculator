import React from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import StyledContainer from "../styles/Main.styles";
import Card from "../components/Card";

const Main = () => {
  const history = useHistory();
  return (
    <StyledContainer>
      <Row>
        <Col sm={12} md={6}>
          <Card history={history} course="CS" />
        </Col>
        <Col sm={12} md={6}>
          <Card history={history} course="IT" />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Main;
