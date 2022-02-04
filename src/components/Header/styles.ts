import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';
import pokeball from '../../assets/pokebola.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: ${mvs(50)}px;
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
