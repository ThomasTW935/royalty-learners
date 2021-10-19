import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: whitesmoke;
`;

const logo = styled.a`
  width: 125px;
  height: 100%;
  img {
    width: 100%;
    height: auto;
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
