import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: .5em;
  /* background:hsl(358,68%,40%); */
  background: #eee;
`;

const logo = styled.a`
  width: 100px;
  height: 50%;
  img {
    background: transparent;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const list = styled.ul`
  display: flex;
  gap: 1rem;
  font-size: 1.1rem;
  list-style: none;
  text-transform: capitalize;
`;
const item = styled.li`
  a {
    color: black;
    font-family: roboto slab, serif;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    border-bottom: ${(props) => (props.active ? "2px solid black" : "")};
    &:hover {
      border-bottom: 2px solid black;
      color: #45b0cb;
      transition: 200ms ease-in;
    }
  }
`;

Nav.Logo = logo;
Nav.List = list;
Nav.Item = item;

export default Nav;
