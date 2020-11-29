import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

type Props = {
    label: string;
};

export const BloodPressureInput = ({ label }: Props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{label}</Text>
            <TextInput style={styles.input} mode="outlined" label="SYS" />
            <TextInput style={styles.input} mode="outlined" label="DIA" />
            <TextInput style={styles.input} mode="outlined" label="PUL" />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        width: 20,
        alignSelf: 'center',
    },
    view: {
        flexDirection: 'row',
    },
    input: {
        width: 110,
        marginRight: 10,
    },
});
