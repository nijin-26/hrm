import styled from "styled-components";

export const PaginationContainer = styled.div`
  margin: 10px 0;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const PaginationNumbers = styled.div`
  display: flex;
  gap: 10px;
`;

export const PaginationButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  padding: 8px 12px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.secondary};
  }

  &:disabled {
    color: #979696;
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:disabled:hover {
    color: #979696;
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
