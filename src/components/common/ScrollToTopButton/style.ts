import styled from "styled-components";

// Styles using styled-components
export const ButtonContainer = styled.button<{ isVisible: boolean }>`
  position: fixed;
  font-size: 24px;
  bottom: 20px;
  right: 20px;
  display: ${(props: { isVisible: boolean }) =>
    props.isVisible ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 10px;
  cursor: pointer;
`;
