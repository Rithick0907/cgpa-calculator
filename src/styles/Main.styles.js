import { Container } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  height: 100vh;
  & > .row {
    height: 100%;
  }

  & .col-md-6 {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export default StyledContainer;
