import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native';

import { Center } from './Center'

const Stack = createStackNavigator();

function Home({navigation}) {
  return(
    <Center>
      <Text>Welcome back, Louis</Text>
      <Button 
        title='Measure your vitals' 
        onPress={()=> navigation.navigate('Vitals')}
        />
    </Center>
  )
}

function Vitals({navigation}) {
  return(
    <Center>
      <Text>Measure your vitals</Text>
      <Button 
        title='Go back home' 
        onPress={()=> navigation.navigate('Home')}
        />
    </Center>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          header: ()=> null
        }}
      >
        <Stack.Screen 
          name='Home' 
          component={Home}
        />
        <Stack.Screen 
          name='Vitals' 
          component={Vitals}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})