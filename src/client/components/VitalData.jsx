import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { FlatGrid } from "react-native-super-grid";

import { TouchableOpacity } from "react-native-gesture-handler";

export const VitalData = ({ navigation }) => {
  const [items, setItems] = React.useState([
    { name: "Temperature", code: "#c0392b", data: "no data", action: null },
    { name: "Blood Pressure", code: "#e74c3c", data: "no data", action: null },
    { name: "Oximeter", code: "#3498db", data: "no data", action: null },
    {
      name: "Patient History",
      code: "#9b59b6",
      data: "User",
      action: () => navigation.navigate("PatientHistory"),
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatGrid
        itemDimension={150}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={item.action}>
            <View
              style={[styles.itemContainer, { backgroundColor: item.code }]}
            >
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.data}</Text>
            </View>
          </TouchableOpacity>
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
