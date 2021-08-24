import Container from './Card.style'
import { Link } from 'react-router-dom'

const Card = ({ image,description,}) => (
  <Container>
    <Container.Content>
      <img src={image} alt={"logo"}/>
      <span>{description}</span>
    </Container.Content>
    <Container.Button>
    <Link to='/register'>Process</Link></Container.Button>
  </Container>
)

export default Card