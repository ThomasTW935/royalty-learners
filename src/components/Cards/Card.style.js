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
  justify-content: space-between;
  align-self: left;
  padding-left: 2rem;
`;

const Title = styled.div`
  font-size: 2rem;
  align-self: left;
`;

const Photo = styled.img`
  max-width: 70%;
  max-height: 70%;
  margin-right: 1rem;
  align-self: left;
`;
const Tag = styled.div`
  justify-content: center;
  font-family: "Merriweather", serif;
  font-size: 2rem;
`;

const Button = styled.button`
  display: flex;
  background: royalblue;
  justify-content: space-evenly;
  color: black;
  align-self: center;
  margin: 5px;
  width: 100px;
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
Container.Title = Tag;
Container.Title = Title;
export default Container;
