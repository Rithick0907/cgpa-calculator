import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import CourseContext from "../context/courseContext";
import { selectCGPA, selectCurriculum } from "../store/curriculumSlice";

const IT = () => {
  const curriculum = useSelector(selectCurriculum);
  const cgpa = useSelector(selectCGPA);
  const param = useParams();

  return (
    <CourseContext.Provider value={{ course: param.courseName }}>
      {cgpa ? (
        <div className="d-flex justify-content-center text-white" lg={12}>
          Your CGPA is {cgpa}
        </div>
      ) : null}
      <Container className="p-5" fluid>
        <Row>
          {curriculum.map((sem, index) => (
            <Col
              className="d-flex justify-content-center my-4 px-5"
              key={index}
              sm={6}
              md={4}
              lg={3}
            >
              <Card courseName={useParams.courseName} sem={sem} />
            </Col>
          ))}
        </Row>
      </Container>
    </CourseContext.Provider>
  );
};

export default IT;
