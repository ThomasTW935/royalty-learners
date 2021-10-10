import styled from "styled-components";
// import HomepageImg from "../../assets/images/HomepageImg.jpg";
import HomepageImg from "../../assets/images/HomepageImg.jpg";

const Board = styled.div`
  display: flex;
  grid-template-columns: auto;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 800px;
  background-image: url(${HomepageImg});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: justify;
  h1 {
    margin-right: 2rem;
  }
`;
export default Board;
