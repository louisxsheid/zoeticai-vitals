import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../components/Home';
import { Doctor } from '../components/Doctor';
import {VitalsNavigator} from '../navigation/StackNavigator';

const Tabs = createBottomTabNavigator();

export const AppTabs = ({}) => {
  return(
    <Tabs.Navigator 
      initialRouteName='Home' 
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 20
        },
        tabStyle: {
          backgroundColor: 'white'
        },
      }}
    >
      <Tabs.Screen name='Home' component={Home}/>
      <Tabs.Screen name='Vitals' component={VitalsNavigator}/>
      <Tabs.Screen name='Doctor' component={Doctor}/>
    </Tabs.Navigator>
  )
}