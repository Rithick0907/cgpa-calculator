import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../components/Card";

const Main = () => (
  <Container style={{ height: "100vh" }}>
    <Row className="h-100">
      <Col
        className="d-flex justify-content-center h-100 align-items-center"
        sm={12}
        md={6}
      >
        <Card course="CS" />
      </Col>
      <Col
        className="d-flex justify-content-center h-100 align-items-center"
        sm={12}
        md={6}
      >
        <Card course="IT" />
      </Col>
    </Row>
  </Container>
);

export default Main;
