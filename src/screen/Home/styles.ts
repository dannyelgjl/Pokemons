import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';
import pokeballClassic from '../../assets/pokeballClassic.png';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
  padding: ${mvs(10)}px;

  padding-bottom: ${mvs(200)}px;
`;

export const PokeSearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${mvs(20)}px;
`;

export const SearchPokeBall = styled.Image.attrs({
  source: pokeballClassic,
})`
  width: ${mvs(40)};
  height: ${mvs(40)};
`;

export const SearchButton = styled.TouchableOpacity`
  margin-left: ${mvs(10)}px;
`;

export const SearchButtonText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: ${mvs(12)}px;
  margin-top: ${mvs(4)}px;
`;

export const PokeSearch = styled.TextInput`
  width: 80%;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.darkOpacity};
  height: ${mvs(38)}px;
  border-radius: 8px;
  font-size: ${mvs(16)};
  padding: ${mvs(8)}px;

  margin-vertical: ${mvs(20)}px;
`;

export const Content = styled.View`
  align-items: center;
  margin-top: ${mvs(10)};
`;
