import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  border-radius: 10px;
  height: 150px;

  .card-body {
    align-items: center;
    display: inherit;
    flex-direction: column;
    font-size: 1.3rem;
    justify-content: center;

    &:hover {
      cursor: pointer;
      transition: 1s;
    }
  }
`;
