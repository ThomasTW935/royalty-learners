import styled from "styled-components";

const Con = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 50ch;
  min-height: 60ch;
  background: white;
  padding: 1rem;
  gap: 1rem;
`;
const section = styled.section`
  display: flex;
  flex-direction:column;
`;
const close = styled.button`
  background: none;
  border: 0;
  transition: 0.2s ease-in-out;
  font-size: 1.2rem;
  position: absolute;
  top: 0%;
  right: 0;
  padding: 1rem;
  &:hover {
    transform: scale(1.2);
  }
`;
const buttons = styled.button``;
const bg = styled.div``;

Con.Section = section;
Con.Close = close;
Con.Buttons = buttons;
Con.BG = bg;

export default Con;
