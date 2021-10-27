import styled from "styled-components";

export const Container = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-evenly;
  background: #5e68d0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 5px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #fbeb5c;
    cursor: pointer;
    transition: 200ms ease-in;
  }
`;

export const BottomTab = styled.div`
  justify-content: space-between;
`;

export const Heading = styled.p`
  font-size: 23px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;
