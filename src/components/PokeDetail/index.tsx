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

interface IPokeDetail {
  pokeImage?: string;
  pokeName?: string;
  weight?: string;
  pokeCalcWeight?: string;
  height?: string;
  pokeCalcHeight?: string;
}
const PokeDetail = ({
  pokeImage,
  pokeName,
  weight,
  pokeCalcWeight,
  height,
  pokeCalcHeight,
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

          {/* <ContentStatus>
<PokeTitle>Height</PokeTitle>
<PokeStatus>{pokemon?.types[0]?.type?.name}</PokeStatus>
</ContentStatus> */}
        </ContainerStatus>
      </PokeStatusCard>
    </>
  );
};

export default PokeDetail;
