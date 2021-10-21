import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 10px;
  height: 35rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;

const Photo = styled.img`
  max-width: 70%;
  max-height: 70%;
  padding-top: 2rem;
`;
const Tag = styled.div`
  justify-content: center;
  font-family: Lato, HelveticaNeueBold, HelveticaNeue-Bold,
    "Helvetica Neue Bold", HelveticaBold, Helvetica-Bold, "Helvetica Bold",
    HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 2rem;
`;
const Button = styled.button`
  background: pink;
  color: #fff;
  padding: 5px;
  margin: 5px;
  width: 150px;
  border: none;
  border-radius: 10px;
  box-sizing: content-box;
  cursor: pointer;
  align-content: center;
  &:hover {
    transition: 0.5s;
    background: skyblue;
  }
`;
Container.Content = Content;
Container.Button = Button;
Container.Photo = Photo;
Container.Title = Tag;
export default Container;
