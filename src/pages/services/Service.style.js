import styled from "styled-components";

const Con = styled.div``;

const cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 3fr));
  gap: 20rem;
  background-color: slategrey;
`;

Con.Cards = cards;

export default Con;
