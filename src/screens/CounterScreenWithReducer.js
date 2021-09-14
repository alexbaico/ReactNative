import React, { useReducer } from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

const modifyCount = (counter, action) => {
  switch (action.type) {
      case 'increment': return {...counter, count: counter.count + action.payload};
      case 'decrement': return {...counter, count: counter.count - action.payload};
      default: return counter;
  }
};

const CounterScreenWithReducer = () => {

    const [counter, dispatch] = useReducer(modifyCount,{count: 0});

    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({type: 'increment', payload: 1})
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({type: 'decrement', payload: 1})
            }}/>
            <Text>Current count: {counter.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreenWithReducer;