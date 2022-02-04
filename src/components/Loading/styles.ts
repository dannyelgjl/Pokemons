import styled from 'styled-components/native';
import openPoke from '../../assets/pokeopen.png';
import {mvs} from 'react-native-size-matters';

export const Container = styled.Image.attrs({
  source: openPoke,
})`
  width: ${mvs(200)}px;
  height: ${mvs(200)}px;
`;
