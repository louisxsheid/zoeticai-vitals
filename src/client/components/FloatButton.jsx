import React from "react";

import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

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
