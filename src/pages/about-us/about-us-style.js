import styled from "styled-components";
import Architecture_Caruana from "../../assets/images/Architecture_Caruana.png";

const Box = styled.div`
  display: flex;
  grid-template-columns: auto;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0 auto;
  background-image: url(${Architecture_Caruana});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Box;
