import styled from "styled-components";

const Con = styled.div`
padding-top: 30px;
  display: flex;
  justify-content: space-evenly;
  background: #5e68d0;
  margin-bottom: -100px;
  
`;
 const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

`;

const Icons = styled.a`
  color: #fff;
  margin-bottom: 5px;
  font-size: 5px;
  text-decoration: none;

  &:hover {
    color: #fbeb5c;
    cursor: pointer;
    transition: 200ms ease-in;
  }
`;

const Texts = styled.p`
font-size: 12px;
text-decoration: none;
`;

const Bg = styled.div`
height: 250px;
width: 380px;
margin-bottom: -100px;
font-size:10px;
`;
const Head = styled.p`
font-size: 15px;
color: #fff;
margin-top: 10px;
margin-bottom: 10px;
font-weight: bold;

`;

const Map = styled.div`
height: 200px;
width: 450px;
`;

const Button = styled.button`
    cursor: pointer;
  `;

Con.Column = Column
Con.Icons = Icons
Con.Bg = Bg
Con.Head = Head
Con.Map = Map
Con.Texts = Texts
Con.Button = Button
export default Con;