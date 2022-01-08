import styled from "styled-components";

const TableStyle = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;
const tHead = styled.thead`
  tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
`;
const tBody = styled.tbody`
  tr{
    /* cursor: pointer; */
    &:hover {
      background: #009879;
      color: white;
      opacity: .8;
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

TableStyle.THead = tHead;
TableStyle.TBody = tBody;
TableStyle.TRow = tRow;
TableStyle.THeader = tHeader;
TableStyle.TData = tData;

export default TableStyle;
