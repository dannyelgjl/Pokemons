import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: ${mvs(6)}px;
  width: ${mvs(140)}px;
  height: ${mvs(140)}px;
  background-color: ${({theme}) => theme.colors.darkOpacity};
`;

export const Pokemon = styled.Image`
  width: ${mvs(60)}px;
  height: ${mvs(60)}px;
  margin-left: ${mvs(4)}px;
`;

export const PokeName = styled.Text`
  font-size: ${mvs(18)}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;

  margin-top: ${mvs(8)}px;
`;
