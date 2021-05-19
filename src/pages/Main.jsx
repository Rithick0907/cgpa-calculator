import React from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import StyledContainer from "../styles/Main.styles";
import Card from "../components/Card";
import { setCourse } from "../store/courseSlice";

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (courseName) => {
    courseName = courseName.toLowerCase();
    history.push(`${courseName}`);
    dispatch(setCourse({ courseName }));
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
