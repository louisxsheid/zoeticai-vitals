import React from 'react';

import { Text, StyleSheet, SafeAreaView, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TodayDate } from '../components/TodayDate'
import { Calendar } from './Calendar';
import { VitalData } from './VitalData'
import { FloatButton } from './FloatButton';

const Stack = createStackNavigator();

export const Vitals = ({navigation}) => {
  return(
    <>
      <TodayDate/>
      <Calendar/>
      <VitalData/>
      <FloatButton navigation={navigation}/>
    </>
  )
}
