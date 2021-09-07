import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
      <View>
          <Text style={styles.text}>BATUUUUNSSS!!!</Text>
          <Button title="Go to Components Screen" onPress={() => navigation.navigate('Components')}/>
          <Button title="Go to List Screen" onPress={() => navigation.navigate('List')}></Button>
          <Button title="Go to Image Screen" onPress={() => navigation.navigate('Image')}></Button>
         {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
              <Text>Go to List Screen</Text>
              <Text>Go to List Screen</Text>
              <Text>Go to List Screen</Text>
          </TouchableOpacity>*/}
          <Button title="Go to Counter Demo" onPress={() => navigation.navigate('Counter')}></Button>
          <Button title="Go to Color Demo" onPress={() => navigation.navigate('Color')}></Button>
          <Button title="Go to Square Demo" onPress={() => navigation.navigate('Square')}></Button>
      </View>
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
