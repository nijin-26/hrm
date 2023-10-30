import styled from "styled-components";

export const Overlay = styled.div<{ isOpen: Boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;

  ${(props) =>
    props.isOpen &&
    `
        background-color: rgba(0, 0, 0, 0.543);
        bottom: 0;
        right: 0;
  `}
`;

export const ModalContainer = styled.div<{ isOpen: Boolean }>`
  display: none;
  padding: 16px;
  position: fixed;
  max-height: 80vh;
  width: 600px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;

  ${(props) =>
    props.isOpen &&
    `
    display: block;
    margin: 0 auto;
    min-width: 290px;
    max-width: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}

  .close-btn {
    position: absolute;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
  }
`;
