import styled from "styled-components";

export const CofirmationForm = styled.form`
  padding: 16px;

  & > p {
    color: var(--font-color);
    font-weight: 500;
    line-height: 1.8;
  }
`;

export const ModalBtnsContainer = styled.div`
  margin-top: 20px;
  flex-direction: row;
  gap: 20px;

  & input {
    margin: 0;
    flex: 1;
  }

  & div {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
