import styled from "styled-components";

export const TableWrapper = styled.div`
  margin: 30px auto;
  min-width: 100%;
  text-align: left;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.fontColor};
  overflow: auto;

  table {
    width: 100%;
    text-align: left;
    table-layout: fixed;
  }

  @media screen and (max-width: 768px) {
    table {
      table-layout: auto;
    }
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
    word-wrap: break-word;
  }

  tr {
    transition: 0.4s ease-in;
    cursor: pointer;
  }

  tr.not-found {
    color: red;
    font-weight: bold;
    text-align: center;
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
