import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MeasureVitals } from "../components/MeasureVitals";
import { Vitals } from "../components/Vitals";

const Stack = createStackNavigator();

export const MeasureVitalsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Vitals" component={Vitals} options={{header: ()=> null}}/>
      <Stack.Screen name="MeasureVitals" component={MeasureVitals} />
    </Stack.Navigator>
  );
};