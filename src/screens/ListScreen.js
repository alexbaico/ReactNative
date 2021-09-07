import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


const ListScreen = () => {
    const friends = [
        {name: 'Alice', age: 53 },
        {name: 'Chango', age: 61},
        {name: 'Esteban', age: 56},
        {name: 'Lisa', age: 75},
        {name: 'Mark', age: 11},
        {name: 'Jhon', age: 23},
        {name: 'DJANGO', age: 32},
        {name: 'Lauren', age: 52},
        {name: 'asd', age: 55},
        {name: 'qwerrrr', age: 12},
        {name: 'fwooooooo', age: 54},
        {name: 'reeeeeeeeeeeeeeee', age: 23},
    ];

    return (
        <FlatList
            keyExtractor={friend => friend.name} data={friends} renderItem={({ item }) => {
            // element === {item: {name: 'Alice'}, index: 0}
            // item === {name: 'Alice'}
            return <Text style={styles.textStyles}>
                {item.name} - Age {item.age}
            </Text>
        }}/>
    );
};

const styles = StyleSheet.create({
    textStyles:{
        marginVertical: 50
    }
});

export default ListScreen;