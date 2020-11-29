import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

type Props = {
    pressure: number;
};

export const OpenWeatherAirPressure = ({ pressure }: Props) => {
    return (
        <View style={styles.body}>
            <View style={styles.label}>
                <Text>OpenWeather air pressure:</Text>
            </View>
            <View style={styles.wrapper}>
                <Text>{`${pressure} hPa`}</Text>
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
    wrapper: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
});
