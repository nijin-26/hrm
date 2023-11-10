import styled from "styled-components";

export const InputWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .error {
    color: red;
  }

  .errorPlaceHolder {
    visibility: hidden;
  }
`;
