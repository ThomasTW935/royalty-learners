import styled from "styled-components";

const Con = styled.div``;

const cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

Con.Cards = cards;

export default Con;
