import Container from "./Card.style";
import { Link } from "react-router-dom";

const Card = ({ image, description, setIsModalOpen }) => (
  <Container>
    <Container.Content>
      <img src={image} alt={"logo"} />
      <span>{description}</span>
    </Container.Content>
    <Container.Button>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Process
      </button>
    </Container.Button>
  </Container>
);

export default Card;
