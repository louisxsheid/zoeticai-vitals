import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../components/Home';
import { Vitals } from '../components/Vitals';
import { Doctor } from '../components/Doctor';

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
        }
      }}
    >
      <Tabs.Screen labelStyle={{fontSize: 20}} name='Home' component={Home}/>
      <Tabs.Screen name='Vitals' component={Vitals}/>
      <Tabs.Screen name='Doctor' component={Doctor}/>
    </Tabs.Navigator>
  )
}