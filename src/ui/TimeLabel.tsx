import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

type Props = {
    time: string;
};

export const TimeLabel = ({ time }: Props) => {
    return (
        <View style={styles.body}>
            <View style={styles.label}>
                <Text>Measurement started at:</Text>
            </View>
            <View style={styles.timeWrapper}>
                <Text>{time}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    label: {},
    timeWrapper: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
});
