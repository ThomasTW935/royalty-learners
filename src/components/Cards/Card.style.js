import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  grid-template-columns: auto;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: auto;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 15px;
  padding: 0.5rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Button = styled(Link)`
  background: green;
  color: #fff;
  padding: 10px;
  margin: 5px;
  width: 150px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  align-content: center;
  &:hover {
    background: darkgreen;
  }
`
Container.Content = Content
Container.Button = Button
export default Container
