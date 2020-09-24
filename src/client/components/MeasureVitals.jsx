import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Alert,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatGrid } from "react-native-super-grid";

const moment = require("moment");

export const MeasureVitals = ({ navigation }) => {
  const isPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const [state, setState] = useState({
    orientation: isPortrait() ? "portrait" : "landscape",
  });

  // Event Listener for orientation changes
  Dimensions.addEventListener("change", () => {
    setState({
      orientation: isPortrait() ? "portrait" : "landscape",
    });
  });

  const [temperature, setTemperature] = React.useState([
    {
      name: "Tap to take your temperature",
      code: "#e74c3c",
      data: null,
    },
  ]);

  const [bloodPressure, setBloodPressure] = React.useState([
    {
      name: "Tap to check your blood pressure",
      code: "#2c3e50",
      data: null,
    },
  ]);

  const [oxygen, setOxygen] = React.useState([
    {
      name: "Tap to check your oxygen levels",
      code: "#3498db",
      data: null,
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>
        Today's Vitals ➜ {moment().format("MMM D")}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: isPortrait() ? "column" : "row",
        }}
      >
        <FlatGrid
          itemDimension={200}
          data={temperature}
          style={styles.gridView}
          spacing={10}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setTimeout(() => {
                  setTemperature([
                    {
                      name: item.name,
                      code: item.code,
                      data:
                        Math.floor(
                          Math.random() * (10 * 10 - 1 * 10) + 1 * 10
                        ) /
                          (1 * 10) +
                        93,
                    },
                  ]);
                }, 2000);
                setTemperature([
                  {
                    name: item.name,
                    code: item.code,
                    data: (
                      <Image
                        style={{ height: 100, width: 100 }}
                        source={require("../../../assets/loading.gif")}
                      />
                    ),
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
                setTimeout(() => {
                  setBloodPressure([
                    {
                      name: item.name,
                      code: item.code,
                      data: `${Math.floor(Math.random() * 20 + 120)}/${Math.floor(Math.random() * 20 + 60)}`,
                    },
                  ]);
                }, 2000);
                setBloodPressure([
                  {
                    name: item.name,
                    code: item.code,
                    data: (
                      <Image
                        style={{ height: 100, width: 100 }}
                        source={require("../../../assets/loading.gif")}
                      />
                    ),
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
                setTimeout(() => {
                setOxygen([
                  {
                    name: item.name,
                    code: item.code,
                    data: `${Math.floor(Math.random() * 5 + 95)}% ${Math.floor(
                      Math.random() * 20 + 70
                    )}bpm`,
                  },
                ]);
              }, 2000);
              setOxygen([
                {
                  name: item.name,
                  code: item.code,
                  data: <Image
                  style={{ height: 100, width: 100 }}
                  source={require("../../../assets/loading.gif")}
                />,
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
      </View>
      <TouchableOpacity
        style={styles.completeContainer}
        onPress={() => {
          if (temperature[0].data && bloodPressure[0].data && oxygen[0].data) {
            let vitals = {
              temperature: temperature[0].data,
              bloodPressure: bloodPressure[0].data,
              oxygen: oxygen[0].data,
              patient: "user1",
            };
            fetch("http://192.168.1.235:3001/data", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(vitals),
            })
              .then((response) => response.json())
              .then((res) => console.log("doneDIDDLY"))
              .then(navigation.goBack());
          } else {
            console.log("bad info");
            Alert.alert("Tap each to get all of your vital signs");
          }
        }}
      >
        <Text style={styles.complete}>COMPLETE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
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
    height: 60,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
