import styled from "styled-components";
import Architecture_Caruana from "../../assets/images/Architecture_Caruana.png";

const Box = styled.div`
  display: flex;
  grid-template-columns: auto;
  align-items: center;
  flex-wrap: nowrap;
  width: 1500px;
  height: 800px;
  margin: 0 auto;
  padding: 0.5rem;
  background-image: url(${Architecture_Caruana});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Box;
