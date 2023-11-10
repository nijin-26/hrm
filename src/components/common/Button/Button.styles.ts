import styled from "styled-components";

export const StyledButton = styled.button<{
  btnType?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  border-radius: 70px;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  font-size: 16px;

  ${(props) =>
    props.btnType === "primary" &&
    `
        background-color: ${props.theme.primary};
        color: ${props.theme.secondary};
        border: 1px solid ${props.theme.secondary};

        &:hover {
            background-color: ${props.theme.secondary};
            color: ${props.theme.primary};
        }
  `}

  ${(props) =>
    props.btnType === "secondary" &&
    `
        border: 1px solid ${props.theme.primary};
        color: ${props.theme.primary};

        &:hover {
            background-color: ${props.theme.secondary};
            color: ${props.theme.primary};
        }
  `}
`;
