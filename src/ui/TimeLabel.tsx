import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const locale = 'de-DE';
const DateTimeOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const currentTimeStamp = new Date(Date.now());
const currentDateTimeString = `${currentTimeStamp.toLocaleDateString(
    locale,
    DateTimeOptions,
)} ${currentTimeStamp.toLocaleTimeString(locale, DateTimeOptions)}`;

export const TimeLabel = () => {
    return (
        <View style={styles.body}>
            <View style={styles.label}>
                <Text>Current time:</Text>
            </View>
            <View style={styles.timeWrapper}>
                <Text>{currentDateTimeString}</Text>
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
