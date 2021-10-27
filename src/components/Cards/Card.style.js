import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 10px;
  padding-left: 1rem;
`;

const Content = styled.div`
  display: flex;
  align-self: left;
  padding-left: 2rem;
`;

const Title = styled.div`
  font-size: 2.5rem;
  align-self: left;
  font-family: "Cardo", Georgia, "Times New Roman", serif;
`;

const Photo = styled.img`
  max-width: 20%;
  max-height: 20%;
  margin-right: 1rem;
  align-self: left;
`;

const ButtonCenter = styled.div`
  display: flex;
  align-self: center;
`;

const Button = styled.button`
  display: flex;
  background: royalblue;
  justify-content: space-evenly;
  color: black;
  align-self: center;
  margin: 5px;
  width: 10rem;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background: skyblue;
  }
`;
Container.Content = Content;
Container.Button = Button;
Container.Photo = Photo;
Container.Title = Title;
Container.Center = ButtonCenter;
export default Container;
