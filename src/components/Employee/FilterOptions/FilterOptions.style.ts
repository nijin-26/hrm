import styled from "styled-components";

export const FilterOptionsWrapper = styled.div`
  width: 80%;
  gap: 12px;
  select {
    flex-grow: 1;
  }

  svg {
    align-self: center;
    cursor: pointer;
  }

  & > .skillWrapper {
    max-width: 80%;
  }
`;
