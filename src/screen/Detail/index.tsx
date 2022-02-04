import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { PokeHeader, PokeLoading, PokeDetail } from '../../components';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { Container, Content, ContainerLoading } from './styles';

import { IPokemon, ParamList } from './types';

const Detail: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<ParamList, 'Detail'>>();

  const pokeDetail = params?.item;

  const [pokemon, setPokemon] = useState({} as IPokemon);

  const pokeCalcWeight = parseFloat(pokemon.weight) / 10;

  const pokeCalcHeight = parseFloat(pokemon.height) / 10;

  useEffect(() => {
    api.get(`${pokeDetail.url}`).then(response => setPokemon(response.data));
  }, []);
  return (
    <>
      <Container>
        <PokeHeader
          title="Poke Detail"
          activeGoBackButton
          onPress={() => navigation.goBack()}
        />

        {!pokeDetail && !pokemon ? (
          <ContainerLoading>
            <PokeLoading />
          </ContainerLoading>
        ) : (
          <Content>
            <PokeDetail
              types={pokemon.types}
              pokeImage={pokemon?.sprites?.other?.home?.front_default}
              pokeName={params.item.name}
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
