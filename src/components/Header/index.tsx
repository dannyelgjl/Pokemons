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

import { IPokeHeader } from './types';

const Header = ({ title, activeGoBackButton, onPress }: IPokeHeader) => {
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
