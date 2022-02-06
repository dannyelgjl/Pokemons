import React, { useEffect, useState, useCallback } from 'react';
import { Alert, FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PokeHeader, PokeCard, PokeLoading } from '../../components';
import { useTheme } from 'styled-components';
import api from '../../services/api';
import { SCREENS } from '../../routes/constants/routes-name';
import { IPokemons } from './types';
import { STRINGS } from './strings';

import {
  Container,
  Content,
  PokeSearch,
  PokeSearchContainer,
  SearchPokeBall,
  SearchButton,
  SearchButtonText,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const [search, setSearch] = useState<string>('');
  const [pokeName, setPokeName] = useState<string>('');
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    api
      .get('/pokemon?limit=1200&offset=0')
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
            if (erro.response.data === `${STRINGS.NOT_FOUND}`) {
              Alert.alert(
                `${STRINGS.POKEMON} ${searchPoke} ${STRINGS.NOT_FOUND} :(`,
              );

              setSearch('');
            }
          });
      }
    },
    [search],
  );

  const handleAlert = () => {
    Alert.alert(STRINGS.ALERT);
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <PokeHeader title={STRINGS.POKE_TITLE} />
      <PokeSearchContainer>
        <PokeSearch
          placeholder={STRINGS.POKE_PLACEHOLDER}
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
            nameImagePng={pokeName}
            onPress={handleAlert}
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
