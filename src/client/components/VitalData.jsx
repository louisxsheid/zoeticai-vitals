import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { FlatGrid } from "react-native-super-grid";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export const VitalData = () => {
  const [items, setItems] = React.useState([
    { name: "Temperature", code: "#c0392b", data: "97.6" },
    { name: "Blood Pressure", code: "#e74c3c", data: "124/40" },
    { name: "Oximeter", code: "#3498db", data: "96% 78bpm" },
    { name: "Patient History", code: "#9b59b6", data: "Louis Sheid" },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatGrid
        itemDimension={150}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.data}</Text>
          </View>
        )}
      />
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
    height: 300,
  },
  itemName: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 50,
    color: "#fff",
  },
});
