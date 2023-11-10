import { ModalContainer, Overlay } from "./Modal.styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IModal } from "../../../core/interfaces/interfaces";
import { CSSProperties } from "styled-components";
import { ReactNode } from "react";

const Modal = ({ isOpen = false, handleModalClose, children }: IModal) => {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={handleModalClose} />
      <ModalContainer isOpen={isOpen}>
        <AiOutlineCloseCircle
          className="close-btn"
          onClick={handleModalClose}
        />
        {children}
      </ModalContainer>
    </>
  );
};

export default Modal;
