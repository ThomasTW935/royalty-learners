import Container from "./Card.style";
import { Link } from "react-router-dom";

const Card = ({ image, description, title, setIsModalOpen, setInfoModal }) => (
  <Container>
    <Container.Title>
      <span>{title}</span>
    </Container.Title>
    <Container.Content>
      <Container.Photo src={image} />
      <span>{description}</span>
    </Container.Content>
    <Container.Content>
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
        Math
      </Container.Button>
      <Container.Button
        onClick={() => {
          setInfoModal(true);
        }}
      >
        Math
      </Container.Button>
      <Container.Button
        onClick={() => {
          setInfoModal(true);
        }}
      >
        Math
      </Container.Button>
      <Container.Button
        onClick={() => {
          setInfoModal(true);
        }}
      >
        Math
      </Container.Button>
    </Container.Content>
  </Container>
);

export default Card;
