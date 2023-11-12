import styled from "styled-components";

export const TableWrapper = styled.div`
  margin: 30px auto;
  width: 100%;
  text-align: left;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.fontColor};

  table {
    width: 100%;
  }

  th > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  table,
  th,
  td {
    padding: 16px;
    table-layout: auto;
    border-collapse: collapse;
  }

  tr {
    transition: 0.4s ease-in;
    cursor: pointer;
  }

  tr:hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
  }

  tr:not(:last-child) td,
  thead th {
    border-bottom: 1px solid ${(props) => props.theme.fontColor};
  }

  .action-btn-container {
    display: flex;
    gap: 20px;
    font-size: 24px;
  }

  .action-btn-container > span:hover {
    color: white;
    transition: 0.2s;
  }
`;
