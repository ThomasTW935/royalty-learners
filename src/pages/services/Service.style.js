import styled from "styled-components";

const Con = styled.div`
  display: absolute;
  background-color: slategrey;
`;

const cards = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

Con.Cards = cards;

export default Con;
