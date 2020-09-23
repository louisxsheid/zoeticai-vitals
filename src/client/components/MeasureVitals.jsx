import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatGrid } from "react-native-super-grid";
import { Center } from "./Center";

const moment = require('moment');

export const MeasureVitals = ({ navigation }) => {
  const [temperature, setTemperature] = React.useState([
    {
      name: "Temperature",
      code: "#e74c3c",
      data: "Tap to take your temperature",
    },
  ]);

  const [bloodPressure, setBloodPressure] = React.useState([
    {
      name: "Blood Pressure",
      code: '#2c3e50',
      data: "Tap to take check blood pressure",
    },
  ]);

  const [oxygen, setOxygen] = React.useState([
    {
      name: "Oximeter",
      code: "#3498db",
      data: "Tap to check your oxygen levels",
    },
  ]);

  console.log(oxygen.code);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>Measure vitals for today: {moment().format('ll')} </Text>
      <FlatGrid
        itemDimension={200}
        data={temperature}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setTemperature([
                {
                  name: item.name,
                  code: item.code,
                  data: Math.floor(Math.random() * (10 * 10 - 1 * 10) + 1 * 10) / (1 * 10) + 93,
                },
              ]);
            }}
          >
            <View
              style={[styles.itemContainer, { backgroundColor: item.code }]}
            >
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.data}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <FlatGrid
        itemDimension={200}
        data={bloodPressure}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setBloodPressure([
                {
                  name: item.name,
                  code: item.code,
                  data: `${Math.floor(Math.random() * 20 + 120)}/${Math.floor(Math.random() * 20 + 60)}`,
                },
              ]);
            }}
          >
            <View
              style={[styles.itemContainer, { backgroundColor: item.code }]}
            >
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.data}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <FlatGrid
        itemDimension={200}
        data={oxygen}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => {
            setOxygen([
              {
                name: item.name,
                code: item.code,
                data: `${Math.floor(Math.random() * 5 + 95)}% ${Math.floor(Math.random() * 20 + 70)}bpm`,
              },
            ]);
          }}
        >
            <View
              style={[styles.itemContainer, { backgroundColor: item.code }]}
            >
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.data}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.completeContainer} onPress={() => navigation.goBack()}>
        <Text style={styles.complete}>COMPLETE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    // backgroundColor: 'white',
  },
  itemContainer: {
    // backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    height: 200,
  },
  itemName: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 40,
    color: "#fff",
    textAlign: "right",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  completeContainer: {
    alignItems: "center",
  },
  complete: {
    color: "#007AFF",
    width: "40%",
    height: 50,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
