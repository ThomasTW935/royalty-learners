import styled from "styled-components";

const Con = styled.div`
  background-color: slategrey;
  display: grid;
  width: 1500px;
  height: 1000px;
`;

const cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 3fr));
  gap: 20rem;
`;

Con.Cards = cards;

export default Con;
