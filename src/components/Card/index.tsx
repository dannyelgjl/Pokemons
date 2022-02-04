import React from 'react';
import { Platform } from 'react-native';

import { Container, PokeName, Pokemon } from './styles';

interface IPokemons {
  name: string;
  nameImageGif: string;
  nameImagePng: string;
  onPress?: () => void;
}

const Card = ({ name, nameImageGif, nameImagePng, onPress }: IPokemons) => {
  return (
    <Container onPress={onPress}>
      <Pokemon
        source={{
          uri:
            Platform.OS === 'ios'
              ? `https://img.pokemondb.net/sprites/black-white/anim/normal/${nameImageGif}.gif`
              : `https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/${nameImagePng}.png`,
        }}
      />

      <PokeName>{name}</PokeName>
    </Container>
  );
};

export default Card;
