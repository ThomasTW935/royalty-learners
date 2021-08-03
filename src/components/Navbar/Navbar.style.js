import styled from 'styled-components'

const Nav = styled.nav`
  display:flex;
  justify-content: space-between;
`

const list = styled.ul`
  display:flex;
  gap: 1rem;
  list-style:none;
  text-transform: capitalize;
  `
const item = styled.li`
a{
  color: black;
  text-decoration: none;
  border-bottom: ${props=> props.active ? '2px solid black' : ''};
  &:hover{
    border-bottom: 2px solid black;
  }
}
`
Nav.List = list
Nav.Item = item

export default Nav