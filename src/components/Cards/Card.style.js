import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  grid-template-columns: auto;
  align-items: center;
  flex-flow: column;
  width: 200px;
  height: auto;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 20px;

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