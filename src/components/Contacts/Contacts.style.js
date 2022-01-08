import styled from "styled-components";

const Con = styled.div`
  display: flex;
  justify-content: space-between;
  background: #5e68d0;
  & > div {
    width: 50%;
  }
`;

const form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
  div {
    display: flex;
    flex-direction: column;
    max-width: 50%;
  }
  button {
    width: 15ch;
    margin: 0.5em auto 0.5em 0;
  }
`;

const info = styled.div`
  margin-Top:5rem;
  display:flex;
  flex-direction:column;
  gap: .2em;
  div {
    display: grid;

  }
`;
const Icons = styled.p`
  color: #fff;
  text-decoration: none;
  grid-column: ${props=> props.full ? "1/3" : ""};
 
`;

const logo = styled.div`
  width: 300px;
  height: 10%;
`;
const head = styled.h4`
  color: #fff;
  text-transform: uppercase;
`;

const Map = styled.div`
  height: 100px;
  width: 250px;
  margin: .5em 0;
`;

Con.Icons = Icons;
Con.Logo = logo;
Con.Head = head;
Con.Map = Map;
Con.Form = form;
Con.Info = info;
export default Con;
