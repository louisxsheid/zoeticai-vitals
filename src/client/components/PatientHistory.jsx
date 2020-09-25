import React, { useEffect, useState } from "react";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const moment = require("moment");

export const PatientHistory = ({ navigation }) => {
  const [state, setState] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    let mounted = true;
    fetch("http://192.168.1.235:3001/data")
      .then((res) => res.json())
      .then((response) => {
        if (mounted) {
          setloading(false);
          setState(response);
        }
      })
      .catch((err) => console.log(err));
    return function cleanup() {
      mounted = false;
    };
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.title}>Patient History</Text>
      <ScrollView>
        <View style={styles.histContainer}>
          {loading ? (
            <Text
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Loading...
            </Text>
          ) : (
            state &&
            state.map((item) => {
              return (
                <View key={item._id} style={styles.dataContainer}>
                  <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                    {item.date}
                  </Text>
                  <Text style={{ fontSize: 25 }}>Tmp: {item.temperature}</Text>
                  <Text style={{ fontSize: 25 }}>BP: {item.bloodPressure}</Text>
                  <Text style={{ fontSize: 25 }}>Ox: {item.oxygen} </Text>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  title: {
    textAlign: "center",
    // paddingTop: 40,
    fontSize: 40,
    fontWeight: "bold",
  },
  histContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  dataContainer: {
    padding: 10,
  },
});
