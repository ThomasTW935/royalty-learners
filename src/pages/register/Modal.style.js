import styled from "styled-components";

const Mod = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const main = styled.div`
  position: fixed;
  background: white;
  width: 30%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const button = styled.button`
  justify-self: center;
  width: 10rem;
  padding: 0.5rem 0.75rem;
  margin: 0 auto;
`;

Mod.main = main;
Mod.button = button;
export default Mod;
