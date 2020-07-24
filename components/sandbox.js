import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
    return (

        <View styles={styles.container}>sandbox</View>


    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        padding: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        flex: 2,
        backgroundColor: 'blue',
        padding: 30,
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 30,
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 30,
    },
    boxFour: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 30,
    }






})
