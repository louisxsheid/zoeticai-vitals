import React from 'react';

import { Text, StyleSheet, SafeAreaView, View } from 'react-native';

import { Center } from '../components/Center';
import { TodayDate } from '../components/TodayDate'
import Calendar from './Calendar';

export const Vitals = () => {
  return(
    <>
      <TodayDate/>
      <Calendar/>
    </>
  )
}
