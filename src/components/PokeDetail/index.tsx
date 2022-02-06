import React from 'react';
import { renderPokemonType } from './pokeTypes/renderPokeType';
import { IPokeDetail, IPoke } from './types';

import {
  PokeImage,
  PokeName,
  PokeStatusCard,
  ContainerStatus,
  ContentStatus,
  PokeTitle,
  PokeStatus,
  PokeTypeStatus,
  ContentStatusCenter,
  PokeTypeContainer,
} from './styles';

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
          <PokeTitle>Type</PokeTitle>
          <PokeTypeContainer>
            {types &&
              types.map((poke: IPoke) => (
                <PokeTypeStatus key={poke.type.name}>
                  {renderPokemonType(poke.type.name)}
                </PokeTypeStatus>
              ))}
          </PokeTypeContainer>
        </ContentStatusCenter>
      </PokeStatusCard>
    </>
  );
};

export default PokeDetail;
