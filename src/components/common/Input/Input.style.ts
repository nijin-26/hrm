import styled from "styled-components";

export const InputWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .error {
    color: red;
  }

  .errorPlaceHolder {
    visibility: hidden;
  }
`;
