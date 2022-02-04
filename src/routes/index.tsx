import React from 'react';
import { Home, Detail } from '../screen';
import { SCREENS } from './constants/routes-name';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name={SCREENS.HOME} component={Home} />
    <Screen name={SCREENS.DETAIL} component={Detail} />
  </Navigator>
);

export default Routes;
