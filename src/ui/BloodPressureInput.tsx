import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { InputsData } from './Inputs';

interface Props {
    label: string;
    handleData: (measurement: InputsData) => void;
}

export const BloodPressureInput = ({ label, handleData }: Props) => {
    const [sys, setSys] = useState('');
    const [dia, setDia] = useState('');
    const [pul, setPul] = useState('');

    useEffect(() => {
        handleData({ label, sys, dia, pul });
    }, [sys, dia, pul]);

    return (
        <View style={styles.view}>
            <Text style={styles.text}>{label}</Text>
            <TextInput
                style={styles.input}
                mode="flat"
                label="SYS"
                keyboardType="number-pad"
                value={sys}
                onChangeText={(value) => setSys(value)}
            />
            <TextInput
                style={styles.input}
                mode="flat"
                label="DIA"
                keyboardType="number-pad"
                value={dia}
                onChangeText={(value) => setDia(value)}
            />
            <TextInput
                style={styles.input}
                mode="flat"
                label="PUL"
                keyboardType="number-pad"
                value={pul}
                onChangeText={(value) => setPul(value)}
            />
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
        marginBottom: 3,
    },
    input: {
        width: '27%',
        marginRight: 10,
    },
});
