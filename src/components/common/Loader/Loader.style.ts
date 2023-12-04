import styled, { keyframes } from "styled-components";

const animloader = keyframes`
  0% {
    box-shadow: 20px -10px, 40px 10px, 60px 0px;
  }
  25% {
    box-shadow: 20px 0px, 40px  0px, 60px 10px;
  }
  50% {
    box-shadow: 20px 10px, 40px -10px, 60px 0px;
  }
  75% {
    box-shadow: 20px 0px, 40px 0px, 60px -10px;
  }
  100% {
    box-shadow: 20px -10px, 40px 10px, 60px 0px;
  }
`;

export const SpinnerContainer = styled.div`
  margin: 60px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.span`
  width: 8px;
  height: 36px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  color: ${(props) => props.theme.fontColor};
  box-sizing: border-box;
  animation: ${animloader} 0.6s linear infinite;
`;
