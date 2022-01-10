import styled from "styled-components";

const Con = styled.div`
  background-color: #FFFFF0;
  display:flex;
  div {
    margin: 1rem;
  }
`;

const section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid rgba(0,0, 0, 0);
  width: 50%;
  height:80%;
`;

const logo = styled.div`
width: 600px;
  height: 250px;
  img {
    background: transparent;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
Con.Logo = logo;

export default Con;
