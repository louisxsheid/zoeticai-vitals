import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";

import { MeasureVitals } from "./MeasureVitals";

const Stack = createStackNavigator();

export const FloatButton = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.75}
        title="MeasureVitals"
        style={styles.orientation}
        onPress={() => navigation.navigate("MeasureVitals")}
      >
        <Image
          source={{
            uri:
              "https://www.pinclipart.com/picdir/big/127-1279384_health-icons-heartbeat-icon-transparent-background-clipart.png",
          }}
          style={styles.button}
        />
      </TouchableOpacity>
    </>
  );
};

// export const MeasureRoute = () => {
//   <NavigationContainer>
//     <Stack.Screen name="MeasureVitals" component={MeasureVitals} />
//   </NavigationContainer>;
// };

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
  orientation: {
    position: "absolute",
    right: 15,
    bottom: 15,
  },

  button: {
    resizeMode: "contain",
    width: 80,
    height: 80,
  },
});
