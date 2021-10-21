import styled from "styled-components";

const Con = styled.div`
  display: absolute;
  background-color: slategrey;
`;

const cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));
  gap: 0.5rem;
`;

Con.Cards = cards;

export default Con;
