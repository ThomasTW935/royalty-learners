import styled from "styled-components";

const Con = styled.div`
  background-color: slategrey;
  height: auto;
`;

const cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 0.5rem;
`;

Con.Cards = cards;

export default Con;
