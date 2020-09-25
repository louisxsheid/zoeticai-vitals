import React from "react";

import { Text, Image } from "react-native";

import { Center } from "../components/Center";

export const Doctor = () => {
  return (
    <Center>
      <Text style={{ color: "black", fontSize: 25 }}>You're healthy!</Text>
      <Image
        source={require("../../../assets/house.gif")}
        style={{ height: 250, width: 250 }}
      />
    </Center>
  );
};
