import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatGrid } from "react-native-super-grid";
import { Center } from "./Center";

export const MeasureVitals = ({ navigation }) => {
  const [items, setItems] = React.useState([
    { name: "Temperature", code: "#c0392b", data: "97.6" },
    { name: "Blood Pressure", code: "#e74c3c", data: "124/40" },
    { name: "Oximeter", code: "#3498db", data: "96% 78bpm" },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={{display: 'flex',float: 'left', margin: 0}}>
        <Button title="←vitals" onPress={() => navigation.goBack()} />
      </View> */}
        <Text style={styles.title}>Measure Vitals for today</Text>
      <FlatGrid
        itemDimension={200}
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
      <TouchableOpacity style={styles.completeContainer}>
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
    fontSize: 50,
    color: "#fff",
    textAlign: 'right'
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  completeContainer: {
    alignItems: 'center',
  },
  complete: {
    color: '#007AFF',
    width: '40%',
    height: 50,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
