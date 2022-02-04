import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';
import pokeball from '../../assets/pokebola.png';
import openPoke from '../../assets/pokeopen.png';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: ${mvs(50)}px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const GoBackButton = styled.TouchableOpacity`
  align-items: center;
`;

export const PokeGoBack = styled.Image.attrs({
  source: openPoke,
})`
  width: 40px;
  height: 40px;
`;

export const TextGoBack = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: ${mvs(14)}px;
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: ${mvs(24)}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
`;

export const PokeBall = styled.Image.attrs({
  source: pokeball,
})`
  width: ${mvs(24)}px;
  height: ${mvs(24)}px;

  margin-left: ${mvs(4)}px;
`;
