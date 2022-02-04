import React from 'react';
import { View } from 'react-native';
import {
  Container,
  PokeBall,
  Title,
  PokeGoBack,
  GoBackButton,
  TextGoBack,
} from './styles';

interface IHeader {
  title: string;
  activeGoBackButton?: boolean;
  onPress?: () => void;
}

const Header = ({ title, activeGoBackButton, onPress }: IHeader) => {
  return (
    <Container>
      {activeGoBackButton ? (
        <GoBackButton onPress={onPress}>
          <PokeGoBack />
          <TextGoBack>Back</TextGoBack>
        </GoBackButton>
      ) : (
        <View />
      )}

      <Title>{title}</Title>
      <PokeBall />
    </Container>
  );
};

export default Header;
