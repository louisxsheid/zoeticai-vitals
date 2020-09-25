import React from "react";

import { Text, Image } from "react-native";

import { Center } from "../components/Center";

export const Home = () => {
  return (
    <Center>
      <Text
        style={{
          color: "black",
          fontSize: 35,
          margin: 10,
          fontWeight: "bold",
        }}
      >
        V I T A L S
      </Text>
      <Image
        source={{
          uri:
            "https://www.pinclipart.com/picdir/big/127-1279384_health-icons-heartbeat-icon-transparent-background-clipart.png",
        }}
        style={{
          height: 200,
          width: 232,
          margin: 0,
        }}
      />
    </Center>
  );
};
