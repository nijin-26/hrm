import styled from "styled-components";

export const SelectWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  position: relative;

  select {
    /* width: 100%; */
    appearance: none;
  }

  .error {
    color: red;
  }

  .errorPlaceHolder {
    visibility: hidden;
  }

  &::after {
    content: "⌄";
    position: absolute;
    right: 22px;
    top: 45%;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--primary-color);
    font-size: 24px;
  }
`;
