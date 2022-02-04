import React from 'react';

import {
  PokeImage,
  PokeName,
  PokeStatusCard,
  ContainerStatus,
  ContentStatus,
  PokeTitle,
  PokeStatus,
  ContentStatusCenter,
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
        </ContainerStatus>

        <ContentStatusCenter>
          <PokeTitle>Type Poke</PokeTitle>

          {types &&
            types.map((poke: IPoke) => (
              <PokeStatus>{poke.type.name}</PokeStatus>
            ))}
        </ContentStatusCenter>
      </PokeStatusCard>
    </>
  );
};

export default PokeDetail;
