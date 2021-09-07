import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor1 = (color, change) => {
        switch (color) {
            case 'red': red + change > 255 || red + change < 0 ? null : setRed(red + change);
                        return;
            case 'green': green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue': blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
        }

    };

    return <View>
        <ColorCounter onIncrease={() => setColor1('red', COLOR_INCREMENT)} onDecrease={() => setColor1('red', -1 * COLOR_INCREMENT)}  color="red"/>
        <ColorCounter onIncrease={() => setColor1('green', COLOR_INCREMENT)} onDecrease={() => setColor1('green', -1 * COLOR_INCREMENT)}  color="green"/>
        <ColorCounter onIncrease={() => setColor1('blue', COLOR_INCREMENT)} onDecrease={() => setColor1('blue', -1 * COLOR_INCREMENT)} color="blue"/>

        <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue}`}}/>
    </View>
};

const styles = StyleSheet.create({});

export default SquareScreen;