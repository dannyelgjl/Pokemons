import React from 'react';
import { View } from 'react-native';

import {
  Container,
  PokeImage,
  PokeName,
  PokeStatusCard,
  ContainerStatus,
  ContentStatus,
  PokeTitle,
  PokeStatus,
} from './styles';

import { IPokeDetail, IPoke } from './types';

const PokeDetail = ({
  pokeImage,
  pokeName,
  weight,
  pokeCalcWeight,
  height,
  pokeCalcHeight,
  types,
}: IPokeDetail) => {
  return (
    <>
      <PokeImage
        source={{
          uri: `${pokeImage}`,
        }}
      />

      <PokeName>{pokeName}</PokeName>
      <PokeStatusCard>
        <ContainerStatus>
          <ContentStatus>
            <PokeTitle>{weight}</PokeTitle>
            <PokeStatus>{pokeCalcWeight} KG</PokeStatus>
          </ContentStatus>

          <ContentStatus>
            <PokeTitle>{height}</PokeTitle>
            <PokeStatus>{pokeCalcHeight} M</PokeStatus>
          </ContentStatus>

          <ContentStatus>
            <PokeTitle>Type</PokeTitle>

            {types.map(poke => (
              <PokeStatus>{poke.type.name}</PokeStatus>
            ))}
          </ContentStatus>

          {/* <ContentStatus>
            <PokeTitle>Height</PokeTitle>
            <PokeStatus>{pokemon?.types[1]?.type?.name}</PokeStatus>
          </ContentStatus> */}
        </ContainerStatus>
      </PokeStatusCard>
    </>
  );
};

export default PokeDetail;
