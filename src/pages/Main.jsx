import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { selectCGPA, selectCurriculum } from "../store/curriculumSlice";

const Main = () => {
  const curriculum = useSelector(selectCurriculum);
  const cgpa = useSelector(selectCGPA);

  return (
    <>
      {cgpa ? (
        <div className="d-flex justify-content-center" lg={12}>
          Your CGPA is {cgpa}
        </div>
      ) : null}
      <Container className="p-5" fluid>
        <Row>
          {curriculum.map((sem, index) => (
            <Col className="my-4 px-5" key={index} sm={6} md={4} lg={3}>
              <Card sem={sem} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Main;
