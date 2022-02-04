import React, { useEffect, useState, useCallback } from 'react';
import { Alert, FlatList, StatusBar } from 'react-native';
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
  const [search, setSearch] = useState<string>('');
  const [pokeName, setPokeName] = useState<string>('');
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    api
      .get('/pokemon?limit=1000&offset=0')
      .then(response => setPokemons(response.data.results));
  }, []);

  useEffect(() => {
    if (search === '') {
      setShowCard(false);
    }
  }, [search]);

  const handleSearch = useCallback(
    (searchPoke: string) => {
      if (search !== '') {
        api
          .get(`/pokemon/${searchPoke}`)
          .then(response => {
            setPokeName(response.data.name), setShowCard(true);
          })
          .catch(erro => {
            if (erro.response.data === 'Not Found') {
              Alert.alert('Pokémon name not found :(');

              setSearch('');
            }
          });
      }
    },
    [search],
  );

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <PokeHeader title="Pokémon World" />
      <PokeSearchContainer>
        <PokeSearch
          placeholder="Find your Pokemon..."
          value={search}
          placeholderTextColor={theme.colors.grey}
          onChangeText={setSearch}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <SearchButton onPress={() => handleSearch(search)}>
          <SearchPokeBall />
          <SearchButtonText>Search</SearchButtonText>
        </SearchButton>
      </PokeSearchContainer>

      <Content>
        {showCard ? (
          <PokeCard
            name={pokeName}
            nameImageGif={pokeName}
            nameImagePng={pokeName}
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
