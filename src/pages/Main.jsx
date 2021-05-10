import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from "../components/Card";

const Main = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Container className="p-5" fluid>
      <Row>
        {array.map((val, index) => (
          <Col className="my-4" key={index} sm={6} md={4} lg={3}>
            <Card val={val} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Main;
