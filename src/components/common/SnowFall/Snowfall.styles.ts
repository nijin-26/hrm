import styled from "styled-components";

export const SnowfallWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

export const Snowflake = styled.div<{ speed: number }>`
  position: absolute;
  background-color: ${(props) => props.theme.secondary};
  width: 5px;
  height: 5px;
  border-radius: 50%;
  animation: fall ${(props) => props.speed}s linear infinite;

  @keyframes fall {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100vh);
    }
  }
`;
