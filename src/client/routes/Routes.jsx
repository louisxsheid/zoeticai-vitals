import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AppTabs } from './AppTabs'
import { MeasureVitals } from '../components/MeasureVitals'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppTabs/>
    </NavigationContainer>
  );
}