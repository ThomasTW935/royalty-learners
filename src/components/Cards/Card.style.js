import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  width: 200px;
  height: auto;
  border: black solid;
  border-radius: 20px;
  font-size: auto;
  justify-content: center;
  color: black;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 10px;

`;

const Content = styled.div`
  align-self:center;

  `;

  const Card = ({ children, color = '#ff867c' }) => (
  <Container color={color}>
  <Content>
      {children}
  </Content>
  </Container>
  
);

export default Card;