import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
  TouchableHighlight,
  Switch
} from 'react-native';

import {
  useDimensions,
  useDeviceOrientation
} from '@react-native-community/hooks';

const moment = require('moment');

export default function Calendar() {

  const todayNum = moment().format('l').split('/')[1];

  const [pressedNum, setPressedNum] = useState(todayNum);

  const [toggle_0, setToggle_0] = useState(false);
  const [toggle_1, setToggle_1] = useState(false);
  const [toggle_2, setToggle_2] = useState(false);
  const [toggle_3, setToggle_3] = useState(false);
  const [toggle_4, setToggle_4] = useState(false);
  const [toggle_5, setToggle_5] = useState(false);
  const [toggle_6, setToggle_6] = useState(false);

  let touchProps_0 = {
    activeOpacity: 1,
    underlayColor: 'white',
    style: toggle_0 ? styles.datePress : null, 
    onHideUnderlay: () => toggle_0 ? setToggle_0(false) : setToggle_0(true),
    onShowUnderlay: () => toggle_0 ? setToggle_0(false) : setToggle_0(true),
    onPress: () => setPressedNum(days[0]),  
  };

  let touchProps_1 = {
    activeOpacity: 1,
    underlayColor: 'white',
    style: toggle_1 ? styles.datePress : null, 
    onHideUnderlay: () => toggle_1 ? setToggle_1(false) : setToggle_1(true),
    onShowUnderlay: () => toggle_1 ? setToggle_1(false) : setToggle_1(true),
    onPress: () => setPressedNum(days[1]),  
  };

  let touchProps_2 = {
    activeOpacity: 1,
    underlayColor: 'white',
    style: toggle_2 ? styles.datePress : null, 
    onHideUnderlay: () => toggle_2 ? setToggle_2(false) : setToggle_2(true),
    onShowUnderlay: () => toggle_2 ? setToggle_2(false) : setToggle_2(true),
    onPress: () => setPressedNum(days[2]),  
  };

  let touchProps_3 = {
    activeOpacity: 1,
    underlayColor: 'white',
    style: toggle_3 ? styles.datePress : null, 
    onHideUnderlay: () => toggle_3 ? setToggle_3(false) : setToggle_3(true),
    onShowUnderlay: () => toggle_3 ? setToggle_3(false) : setToggle_3(true),
    onPress: () => setPressedNum(days[3]),  
  };

  let touchProps_4 = {
    activeOpacity: 1,
    underlayColor: 'white',
    style: toggle_4 ? styles.datePress : null, 
    onHideUnderlay: () => toggle_4 ? setToggle_4(false) : setToggle_4(true),
    onShowUnderlay: () => toggle_4 ? setToggle_4(false) : setToggle_4(true),
    onPress: () => setPressedNum(days[4]),  
  };

  let touchProps_5 = {
    activeOpacity: 1,
    underlayColor: 'white',
    style: toggle_5 ? styles.datePress : null, 
    onHideUnderlay: () => toggle_5 ? setToggle_5(false) : setToggle_5(true),
    onShowUnderlay: () => toggle_5 ? setToggle_5(false) : setToggle_5(true),
    onPress: () => setPressedNum(days[5]),  
  };

  let touchProps_6 = {
    activeOpacity: 1,
    underlayColor: 'white',
    style: toggle_6 ? styles.datePress : null, 
    onHideUnderlay: () => toggle_6 ? setToggle_6(false) : setToggle_6(true),
    onShowUnderlay: () => toggle_6 ? setToggle_6(false) : setToggle_6(true),
    onPress: () => setPressedNum(days[6]),  
  };

  const { landscape } = useDeviceOrientation();
  let days = [];

  for (let i = 6; i >= 0; i--) {
    days.push(moment().subtract(i, 'days').format('l').split('/')[1])
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dateContainer}>

        <TouchableHighlight {...touchProps_0}>
          <Text style={styles.text}>{days[0]}</Text>
        </TouchableHighlight>


        <TouchableHighlight {...touchProps_1}>
          <Text style={styles.text}>{days[1]}</Text>
        </TouchableHighlight>


        <TouchableHighlight {...touchProps_2}>
          <Text style={styles.text}>{days[2]}</Text>
        </TouchableHighlight>


        <TouchableHighlight {...touchProps_3}>
          <Text style={styles.text}>{days[3]}</Text>
        </TouchableHighlight>


        <TouchableHighlight {...touchProps_4}>
          <Text style={styles.text}>{days[4]}</Text>
        </TouchableHighlight>


        <TouchableHighlight {...touchProps_5}>
          <Text style={styles.text}>{days[5]}</Text>
        </TouchableHighlight>

        <TouchableHighlight {...touchProps_6}>
          <Text style={styles.text}>{days[6]}</Text>
        </TouchableHighlight>

      </View>
      <Text style={styles.showData}>
        showing data for 
        {" " + moment().format('ll').split(' ')[0]} {pressedNum}
      </Text>
    </SafeAreaView>
  );
}


let styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    alignItems: "center",
    flex: 12,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: '100%',
    fontSize: 25,
  },
  dateContainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    height: '10%',
    // flex: 1,
    borderRadius: 10,
    width: '95%',
  },
  text: {
    fontSize: 25,
  },
  datePress: {
    borderRadius: 100,
    backgroundColor: 'tomato'
  },
  showData: {
    width: '100%',
    display: 'flex',
    textAlign: 'center',
    color: 'black',
    fontSize: 20
  }
});