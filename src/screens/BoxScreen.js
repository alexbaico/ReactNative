import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child 1</Text>
            <Text style={styles.textTwoStyle}>Child 2</Text>
            <Text style={styles.textThreeStyle}>Child 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        //parent properties examples
        alignItems: 'flex-start',
        flexDirection:  'row' ,//column and row, way childs beheave depends on alignItems value
        justifyContent:  'center' ,//way childs beheave depends on alignItems value also... flex-start, center, flex-end, space-between, space-around
        //
        height: 200
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //child properties examples
        flex: 1, // makes it takes as much space as it can (works as proportion)
        alignSelf: 'flex-end',
        //top, bottom, left, right. Applies after all child have been rendered, so can cause overlap between childs
        top: 10
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //child properties examples
        flex: 1, // also and shares same space with others 'flex: 1' (works as proportion)
        alignSelf: 'stretch'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //child properties examples
        flex: 3, // takes 3 of the 5 total spaces (1+1+3) (works as proportion)
        position: 'absolute' //with absolute it still obeys, and also ignores some parent properties/values
    },
    fillEntireParentStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }, // idem than
    fillEntireParentStyleIdem: {
        ...StyleSheet.absoluteFillObject
    }
});

export default BoxScreen;