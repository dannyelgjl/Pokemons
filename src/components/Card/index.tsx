import React from 'react';

import { Container, PokeName, Pokemon } from './styles';
import { IPokemons } from './types';

const Card = ({ name, nameImagePng, onPress }: IPokemons) => {
  return (
    <Container onPress={onPress}>
      <Pokemon
        source={{
          uri: `https://img.pokemondb.net/sprites/home/normal/${nameImagePng}.png`,
        }}
      />

      <PokeName>{name}</PokeName>
    </Container>
  );
};

export default Card;
