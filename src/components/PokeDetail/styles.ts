import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';

export const Container = styled.View``;

export const PokeImage = styled.Image`
  width: ${mvs(240)}px;
  height: ${mvs(240)}px;
`;

export const PokeName = styled.Text`
  text-align: center;
  font-size: ${mvs(40)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.white};
  margin-top: ${mvs(16)}px;
  margin-bottom: ${mvs(22)}px;

  text-transform: capitalize;
`;

export const PokeStatusCard = styled.View`
  width: 100%;
  padding: ${mvs(20)}px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.darkOpacity};
`;

export const ContainerStatus = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentStatus = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ContentStatusCenter = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${mvs(18)}px;
`;

export const PokeTitle = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: ${mvs(14)}px;
`;

export const PokeStatus = styled.Text`
  color: ${({theme}) => theme.colors.text};
  margin-top: ${mvs(4)}px;
  font-weight: bold;
  font-size: ${mvs(18)}px;

  text-transform: capitalize;
`;
