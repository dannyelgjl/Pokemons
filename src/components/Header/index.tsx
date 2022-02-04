import React from 'react';
import { Container, PokeBall, Title } from './styles';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <PokeBall />
    </Container>
  );
};

export default Header;
