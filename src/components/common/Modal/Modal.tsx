import { ReactNode } from "react";
import { ModalContainer, Overlay } from "./Modal.styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({
  isOpen = false,
  handleModalClose,
  children,
}: {
  isOpen: boolean;
  handleModalClose: () => void;
  children: ReactNode;
}) => {
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
