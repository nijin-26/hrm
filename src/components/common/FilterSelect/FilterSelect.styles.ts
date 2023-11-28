import styled from "styled-components";

export const FilterSelectWrapper = styled.div`
  position: relative;

  &::after {
    content: "⌄";
    position: absolute;
    right: 8px;
    top: 42%;
    transform: translateY(-50%);
    pointer-events: none;
    color: inherit;
    font-size: 20px;
  }

  select {
    appearance: none;
    height: 100%;
    padding: 4px 8px;
    flex: 1;
    width: 200px;
  }

  @media screen and (max-width: 768px) {
    height: 50px;
  }
`;
