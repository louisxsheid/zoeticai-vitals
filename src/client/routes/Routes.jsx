import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppTabs } from "../navigation/AppTabs";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppTabs/>
    </NavigationContainer>
  );
}
