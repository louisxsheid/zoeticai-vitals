import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AppTabs } from "../navigation/AppTabs";
import { MeasureVitals } from "../components/MeasureVitals";
import { FloatButton } from "../components/FloatButton";

import { MeasureVitalsNavigator } from '../navigation/StackNavigator';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppTabs/>
    </NavigationContainer>
  );
}
