import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  border-radius: 10px;
  cursor: pointer;
  height: 150px;
  width: 200px;

  .card-body {
    align-items: center;
    display: inherit;
    flex-direction: column;
    font-size: 1.3rem;
    justify-content: center;

    &:hover {
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
      font-weight: bold;
    }
  }
`;
