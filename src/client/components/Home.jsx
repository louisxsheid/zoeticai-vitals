import React from 'react';

import { Text, StyleSheet } from 'react-native';

import { Center } from '../components/Center';
import { FloatButton } from './FloatButton';

export const Home = ({navigation}) => {
  return(
    <>
    <Center>
      <Text style={{ color: 'black', fontSize: 25 }}>Home page</Text>
    </Center>
    {/* <FloatButton navigation={navigation}/> */}
    </>
  )
}
