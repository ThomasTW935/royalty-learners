import styled from "styled-components";
import HomepageImg from "../../assets/images/HomepageImg.jpg";

const Board = styled.div`
  display: flex;
  grid-template-columns: auto;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 800px;
  padding: 0mm;
  margin: 0mm;
  background-image: url(${HomepageImg});
  background-repeat: no-repeat;
  background-size: 100rem;
  text-align: justify;
`;
export default Board;
