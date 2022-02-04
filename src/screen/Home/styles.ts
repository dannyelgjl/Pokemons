import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${mvs(19)}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
`;
