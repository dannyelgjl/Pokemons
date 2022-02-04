import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
  padding: ${mvs(24)}px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-horizontal: ${mvs(24)}px;
  padding-vertical: ${mvs(18)}px;

  border-radius: 8px;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
