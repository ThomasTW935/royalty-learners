import styled from "styled-components";
// import HomepageImg from "../../assets/images/HomepageImg.jpg";
import HomepageImg from "../../assets/images/HomepageImg.jpg";

const Board = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 500px;
  background-image: url(${HomepageImg});
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 20px;
  font-family: roboto slab, serif;
  font-weight: 700;

  div {
    padding-left: 1rem;
  }
  h1 {
    gap: 1rem;
  }
`;
export default Board;
