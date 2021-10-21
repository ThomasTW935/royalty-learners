import Container from "./Card.style";
import { Link } from "react-router-dom";

const Card = ({ image, description, title, setIsModalOpen }) => (
  <Container>
    <Container.Photo src={image} />
    <span>{title}</span>
    <Container.Content>
      <span>{description}</span>
    </Container.Content>
    <Container.Button>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Proceed
      </button>
    </Container.Button>
  </Container>
);

export default Card;
