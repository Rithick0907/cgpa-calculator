import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  height: 150px;

  .card-body {
    align-items: center;
    display: inherit;
    justify-content: center;

    &:hover {
      background-color: var(--color-primary);
      cursor: pointer;
      transition: 1s;
    }
  }
`;
