import styled from "styled-components";

const Con = styled.div`
  background-color: #51B9E7;
  display:flex;

  div {
    margin: 5px;
  }
`;

const section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin: 5px;
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
