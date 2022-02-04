import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PokeHeader, PokeCard, PokeLoading } from '../../components';
import { useTheme } from 'styled-components';
import api from '../../services/api';
import {
  Container,
  Content,
  PokeSearch,
  PokeSearchContainer,
  SearchPokeBall,
  SearchButton,
  SearchButtonText,
} from './styles';
import { SCREENS } from '../../routes/constants/routes-name';
import { IPokemons } from './types';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const [searchPoke, setSearchPoke] = useState<string>('');

  console.log('SEARCH', searchPoke);
  console.log('POKE', pokemons);

  useEffect(() => {
    api
      .get('/pokemon?limit=2&offset=0')
      .then(response => setPokemons(response.data.results));
  }, []);

  const handleSearch = useCallback(() => {
    if (searchPoke !== '') {
      api
        .get(`/pokemon/${searchPoke}`)
        .then(response => setSearchPoke(response.data.name));
    } else {
      return;
    }
  }, [searchPoke]);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <PokeHeader title="Pokémon World" />
      <PokeSearchContainer>
        <PokeSearch
          placeholder="Busque seu Pokémon..."
          value={searchPoke}
          placeholderTextColor={theme.colors.grey}
          onChangeText={setSearchPoke}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <SearchButton onPress={() => handleSearch()}>
          <SearchPokeBall />
          <SearchButtonText>Buscar</SearchButtonText>
        </SearchButton>
      </PokeSearchContainer>

      <Content>
        {searchPoke !== '' ? (
          <PokeCard
            name={searchPoke}
            nameImageGif={searchPoke}
            nameImagePng={searchPoke}
          />
        ) : (
          <FlatList
            ListEmptyComponent={<PokeLoading />}
            data={pokemons}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.name}
            numColumns={2}
            renderItem={({ item }) => (
              <PokeCard
                onPress={() =>
                  navigation.navigate(SCREENS.DETAIL, { item: item })
                }
                name={item.name}
                nameImageGif={item.name}
                nameImagePng={item.name}
              />
            )}
          />
        )}
      </Content>
    </Container>
  );
};

export default Home;
