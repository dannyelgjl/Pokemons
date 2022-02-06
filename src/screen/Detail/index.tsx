import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { PokeHeader, PokeLoading, PokeDetail } from '../../components';

import api from '../../services/api';

import { IPokemon, ParamList } from './types';
import { STRINGS } from './strings';

import { Container, Content, ContainerLoading } from './styles';

const Detail: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<ParamList, 'Detail'>>();

  const pokeDetail = params?.item;

  const [pokemon, setPokemon] = useState({} as IPokemon);

  const pokeCalcWeight = parseFloat(pokemon.weight) / 10;

  const pokeCalcHeight = parseFloat(pokemon.height) / 10;

  useEffect(() => {
    api.get(`${pokeDetail.url}`).then(response => setPokemon(response.data));
  }, [pokeDetail.url]);

  return (
    <>
      <Container>
        <PokeHeader
          title={STRINGS.POKE_TITLE}
          activeGoBackButton
          onPress={() => navigation.goBack()}
        />

        {!pokeDetail.name && !pokemon ? (
          <ContainerLoading>
            <PokeLoading />
          </ContainerLoading>
        ) : (
          <Content>
            <PokeDetail
              types={pokemon.types}
              pokeImage={pokemon?.sprites?.other?.home?.front_default}
              pokeName={pokeDetail.name}
              weight="Weight"
              pokeCalcWeight={String(pokeCalcWeight)}
              height="Height"
              pokeCalcHeight={String(pokeCalcHeight)}
            />
          </Content>
        )}
      </Container>
    </>
  );
};

export default Detail;
