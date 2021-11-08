import styled from "styled-components";

const Con = styled.div`
  background-color: #fffde0;
`;

const services = styled.section`
  &>div:nth-child(even){
      background: #F3E6B5;
  }
`;
const service = styled.div`
  display: grid;
  grid-template: 1fr /1fr 2fr;
  gap: 1em;
  padding: 1.5em;
  h3{
    grid-column: 1/3;
  }
  p{
    width: 60ch;
  }
`

Con.Services = services;
Con.Service = service;

export default Con;
