import styled from "styled-components";
import modern from "../../assets/images/modern.jpg";

const Kevin = styled.div`
  display: flex;
  grid-template-columns: auto;
  align-items: center;
  flex-wrap: nowrap;
  width: 1500px;
  height: 600px;
  margin: 0 auto;
  padding: 0.5rem;
  background-image: url(${modern});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Kevin;
