import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

type Props = {
    label: string;
    values: {
        sys: string;
        dia: string;
        pul: string;
    };
    handleChange: (field: string) => void;
};

export const BloodPressureInput = ({ label, values, handleChange }: Props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{label}</Text>
            <TextInput
                style={styles.input}
                mode="flat"
                label="SYS"
                keyboardType="number-pad"
                value={values.sys}
                onChangeText={handleChange('sys')}
            />
            <TextInput
                style={styles.input}
                mode="flat"
                label="DIA"
                keyboardType="number-pad"
                value={values.dia}
                onChangeText={handleChange('dia')}
            />
            <TextInput
                style={styles.input}
                mode="flat"
                label="PUL"
                keyboardType="number-pad"
                value={values.pul}
                onChangeText={handleChange('pul')}
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
