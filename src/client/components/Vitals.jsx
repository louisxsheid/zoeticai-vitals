import React from 'react';
import { TodayDate } from '../components/TodayDate'
import { VitalPage } from './VitalPage';
import { FloatButton } from './FloatButton';

export const Vitals = ({navigation}) => {
  return(
    <>
      <TodayDate/>
      <VitalPage navigation={navigation}/>
      <FloatButton navigation={navigation}/>
    </>
  )
}
