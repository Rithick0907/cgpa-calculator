import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from "../components/Card";
import curriculum from "../data/curriculum";

const Main = () => {
  return (
    <Container className="p-5" fluid>
      <Row>
        {curriculum.map((sem, index) => (
          <Col className="my-4" key={index} sm={6} md={4} lg={3}>
            <Card sem={sem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Main;
