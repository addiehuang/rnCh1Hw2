import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [water, setWater] = useState(0)
  const [change, setChange] = useState(0)
  const add = () => setWater(water + 10)
  const zero = () => setWater(0)
  const picture = () => setChange((change+1)%2)

  const plant = {
    plant0: require("./src/img/plant01.png"),
    plant1: require("./src/img/plant02.png")
  }



  return (
    <View style={styles.container}>
      <Text style={styles.header}>目前水量：{water} ml</Text>
      <Text style={styles.header}>點擊圖片來切換植物🌳</Text>
      
      <TouchableOpacity
        onPress={picture}
      >
        <Image
        style={{width:160, height:360,margin:8,alignItems:'center',resizeMode: 'contain'}}
        source={plant["plant" + change]}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button1}
        onPress={add}
      >
        <Text style={styles.btnText}>Add Water</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={zero}
      >
        <Text style={styles.btnText}>Zeroing</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F3F7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    margin:4,
    textAlign: 'center',
    fontSize:16
},

  mainInput:{
    height:60,
    width:300, 
    borderRadius:4,
    borderColor:'#EBF2FF',
    borderWidth:4,
    backgroundColor:'#EBF2FF',
    color:'#3571FF',
    fontSize:20,
    textAlign:'center',
  },

  button1: {
    margin: 8,
    padding: 16,
    width:200, 
    // paddingLeft: 20,
    // paddingRight: 20,
    backgroundColor: '#3571FF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button2: {
    margin: 8,
    padding: 16,
    width:200, 
    // paddingLeft: 20,
    // paddingRight: 20,
    backgroundColor: '#FF613C',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText : {
    color:'#FFFFFF',
    fontFamily: "Futura",
    fontSize:16,
  }
  
});
