import React from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
} from "react-native";

const moment = require("moment");

export const TodayDate = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{moment().format("LL")}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'black',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    width: "100%",
    height: "8%",
    // justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
});
