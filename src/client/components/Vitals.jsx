import React from 'react';

import { Text, StyleSheet, SafeAreaView, View } from 'react-native';

import { TodayDate } from '../components/TodayDate'
import { Calendar } from './Calendar';
import { VitalData } from './VitalData'

export const Vitals = () => {
  return(
    <>
      <TodayDate/>
      <Calendar/>
      <VitalData/>
    </>
  )
}
