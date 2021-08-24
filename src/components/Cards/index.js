import Container from './Card.style'

const Card = ({ image, description }) => (
  <Container>
    <Container.Content>
      <img src={image} alt={'logo'} />
      <span>{description}</span>
    </Container.Content>
    <Container.Button to='/register'>Processs</Container.Button>
  </Container>
)

export default Card
