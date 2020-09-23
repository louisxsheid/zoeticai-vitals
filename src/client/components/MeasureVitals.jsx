import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';

import { Center } from './Center';

export const MeasureVitals = ({navigation}) => {
  return(
    <Center>
      <Text style={{color: 'black', fontSize: 25}}>
        Measure your vitals
      </Text>
      <Button title='go back' onPress={() => navigation.goBack()}/>
    </Center>
  )
}