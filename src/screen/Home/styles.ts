import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
  padding: ${mvs(10)}px;
`;
