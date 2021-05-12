import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  box-shadow: lightgray 1px 1px;
  border-radius: 5px;
  height: 150px;

  .card-body {
    align-items: center;
    display: inherit;
    justify-content: center;

    &:hover {
      background-color: var(--color-primary);
      border-radius: 5px;
      box-shadow: lightgray 1px 1px;
      cursor: pointer;
      transition: 1s;
    }
  }
`;
