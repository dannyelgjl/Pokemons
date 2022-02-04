import React, { useEffect, useState } from 'react';
import { FlatList, Platform, StatusBar } from 'react-native';

import { PokeHeader, PokeCard } from '../../components';
import api from '../../services/api';
import { Container, Content, Card, Pokemon, PokeName } from './styles';

interface IPokemons {
  name: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);

  useEffect(() => {
    api
      .get('/pokemon?limit=1000&offset=0')
      .then(response => setPokemons(response.data.results));
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <PokeHeader title="Pokémon World" />

      <Content>
        <FlatList
          data={pokemons}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.name}
          numColumns={2}
          renderItem={({ item }) => (
            <PokeCard
              name={item.name}
              nameImageGif={item.name}
              nameImagePng={item.name}
            />
          )}
        />
      </Content>
    </Container>
  );
};

export default Home;
