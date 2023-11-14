import styled from "styled-components";

export const CofirmationForm = styled.form`
  padding: 16px;

  & > p {
    color: var(--font-color);
    font-weight: 500;
    line-height: 1.8;
  }

  & input {
    width: 80%;
    margin: 0;
  }
`;

export const ModalBtnsContainer = styled.div`
  margin-top: 20px;
  justify-content: flex-end;
  gap: 20px;
`;
