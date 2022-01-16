import styled from "styled-components";

const TableStyle = styled.table`
  border-collapse: collapse;
  margin: 1rem auto;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;
const tHead = styled.thead`
  tr {
    background-color: rgb(34, 138, 239);
    color: #ffffff;
    text-align: center;
  }
`;
const tBody = styled.tbody`
  tr {
    /* cursor: pointer; */
    &:hover {
      background-color: rgba(34, 138, 239, 0.8);
      color: white;
      opacity: 0.8;
    }
  }
`;
const tRow = styled.tr`
  border-bottom: thin solid #dddddd;
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
`;
const tHeader = styled.th`
  padding: 12px 15px;
`;
const tData = styled.td`
  padding: 12px 15px;
`;
const tButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
`;

TableStyle.THead = tHead;
TableStyle.TBody = tBody;
TableStyle.TRow = tRow;
TableStyle.THeader = tHeader;
TableStyle.TData = tData;
TableStyle.TButton = tButton;

export default TableStyle;
