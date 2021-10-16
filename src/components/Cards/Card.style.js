import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 1rem ;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  background: pink;
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
    background: skyblue;
  }
`;
Container.Content = Content;
Container.Button = Button;
export default Container;
