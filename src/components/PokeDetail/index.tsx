import React from 'react';
import * as Types from './pokemonTypes';

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
  const renderPokemonType = (type: string) => {
    switch (type) {
      case 'grass':
        return <Types.Grass>{type}</Types.Grass>;
      case 'ground':
        return <Types.Ground>{type}</Types.Ground>;
      case 'fire':
        return <Types.Fire>{type}</Types.Fire>;
      case 'water':
        return <Types.Water>{type}</Types.Water>;
      case 'fighting':
        return <Types.Fighting>{type}</Types.Fighting>;
      case 'ice':
        return <Types.Ice>{type}</Types.Ice>;
      case 'poison':
        return <Types.Poison>{type}</Types.Poison>;
      case 'dark':
        return <Types.Dark>{type}</Types.Dark>;
      case 'fairy':
        return <Types.Fairy>{type}</Types.Fairy>;
      case 'psychic':
        return <Types.Psychic>{type}</Types.Psychic>;
      case 'normal':
        return <Types.Normal>{type}</Types.Normal>;
      case 'ghost':
        return <Types.Ghost>{type}</Types.Ghost>;
      case 'rock':
        return <Types.Rock>{type}</Types.Rock>;
      case 'dragon':
        return <Types.Dragon>{type}</Types.Dragon>;
      case 'flying':
        return <Types.Flying>{type}</Types.Flying>;
      case 'steel':
        return <Types.Steel>{type}</Types.Steel>;
      case 'electric':
        return <Types.Electric>{type}</Types.Electric>;
      case 'bug':
        return <Types.Bug>{type}</Types.Bug>;
    }
  };

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
              <PokeStatus>{renderPokemonType(poke.type.name)}</PokeStatus>
            ))}
        </ContentStatusCenter>
      </PokeStatusCard>
    </>
  );
};

export default PokeDetail;
