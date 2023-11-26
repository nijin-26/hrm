import styled from "styled-components";

export const FilterOptionsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  gap: 12px;
  margin: 20px 0;
  select {
    flex-grow: 1;
  }

  svg {
    align-self: center;
    cursor: pointer;
  }

  & > .skillWrapper {
    max-height: 50px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    height: 100px;
  }

  @media screen and (max-width: 420px) {
    height: 160px;
  }
`;
