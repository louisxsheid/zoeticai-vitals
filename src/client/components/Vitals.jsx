import React from 'react';

import { Text, StyleSheet, SafeAreaView, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TodayDate } from '../components/TodayDate'
import { VitalPage } from './VitalPage';
import { FloatButton } from './FloatButton';

const Stack = createStackNavigator();

export const Vitals = ({navigation}) => {
  return(
    <>
      <TodayDate/>
      <VitalPage navigation={navigation}/>
      <FloatButton navigation={navigation}/>
    </>
  )
}
