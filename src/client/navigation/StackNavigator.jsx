import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MeasureVitals } from "../components/MeasureVitals";
import { Vitals } from "../components/Vitals";
import { PatientHistory } from "../components/PatientHistory"

const Stack = createStackNavigator();

export const VitalsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Vitals" component={Vitals} options={{header: ()=> null}}/>
      <Stack.Screen name="MeasureVitals" component={MeasureVitals} options={{header: ()=> null}}/>
      <Stack.Screen name="PatientHistory" component={PatientHistory} options={{header: ()=> null}}/>
    </Stack.Navigator>
  );
};