import Container from "./Card.style";
import { Link } from "react-router-dom";

const Card = ({ image, description, title, setIsModalOpen, setInfoModal }) => (
  <Container>
    <Container.Title>
      {title}
    </Container.Title>
    <Container.Content>
      <Container.Photo src={image} />
      <span>{description}</span>
    </Container.Content>
    <Container.Center>
      <Container.Button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Proceed
      </Container.Button>
      <Container.Button
        onClick={() => {
          setInfoModal(true);
        }}
      >
        More Details
      </Container.Button>
    </Container.Center>
  </Container>
);

export default Card;
