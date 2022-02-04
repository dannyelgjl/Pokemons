import React from 'react';
import { Container, PokeBall, Title } from './styles';

interface IHeader {
  title: string;
}

const Header = ({ title }: IHeader) => {
  return (
    <Container>
      <Title>{title}</Title>
      <PokeBall />
    </Container>
  );
};

export default Header;
