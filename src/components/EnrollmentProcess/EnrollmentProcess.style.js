import styled from "styled-components";

const Con = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  gap: 1em;
`;

const title = styled.h2`
`;
const icon = styled.div``;
const list = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const listItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  div {
    padding: 1rem;
    border-radius: 50%;
    background: #f1f4f7;
  }
  p{
    text-align:center;
  }
`;

Con.Title = title;
Con.Icon = icon;
Con.List = list;
Con.ListItem = listItem;

export default Con;
