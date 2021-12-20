import styled from "styled-components";

const Con = styled.div`
  background-color: #51B9E7;
  display:flex;


  div {
    margin: 2rem;
  }
`;

const section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height:100%;
  div{img-size:0.5rem;
  }
`;

const title = styled.h2`
  font-weight: bold;
`;
const desc = styled.p`
  display: flex;
`;

const list = styled.ul``;

Con.Section = section;
Con.Title = title;
Con.Desc = desc;
Con.List = list;

export default Con;
