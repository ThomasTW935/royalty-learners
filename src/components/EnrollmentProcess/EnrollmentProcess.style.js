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

const rotateImg = styled.img`
  transform: rotate(180deg);
`

Con.Title = title;
Con.Icon = icon;
Con.List = list;
Con.ListItem = listItem;
Con.RotateImg = rotateImg;

export default Con;
