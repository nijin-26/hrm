import styled from "styled-components";

export const FilterSelectWrapper = styled.div`
  position: relative;

  &::after {
    content: "⌄";
    position: absolute;
    right: 10px;
    top: 42%;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--primary-color);
    font-size: 20px;
  }

  select {
    appearance: none;
    height: 100%;
  }
`;
