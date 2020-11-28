import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

export const Inputs = () => {
    return (
        <>
            <View style={styles.view}>
                <Text style={styles.text}>1:</Text>
                <TextInput style={styles.input} mode="outlined" label="SYS" />
                <TextInput style={styles.input} mode="outlined" label="DIA" />
                <TextInput style={styles.input} mode="outlined" label="PUL" />
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>2:</Text>
                <TextInput style={styles.input} mode="outlined" label="SYS" />
                <TextInput style={styles.input} mode="outlined" label="DIA" />
                <TextInput style={styles.input} mode="outlined" label="PUL" />
            </View>
            <View style={styles.view}>
                <Text style={styles.text}>3:</Text>
                <TextInput style={styles.input} mode="outlined" label="SYS" />
                <TextInput style={styles.input} mode="outlined" label="DIA" />
                <TextInput style={styles.input} mode="outlined" label="PUL" />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        width: 20,
        alignSelf: 'center',
    },
    view: {
        padding: 10,
        flexDirection: 'row',
    },
    input: {
        width: 110,
        marginRight: 10,
    },
});
