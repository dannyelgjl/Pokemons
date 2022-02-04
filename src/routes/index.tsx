import React from 'react';
import { Home } from '../screen';
import { SCREENS } from './constants/routes-name';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name={SCREENS.HOME} component={Home} />
  </Navigator>
);

export default Routes;
