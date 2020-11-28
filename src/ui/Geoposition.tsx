import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Geolocation, { GeolocationError, GeolocationResponse } from '@react-native-community/geolocation';

type Params = {
    success: boolean;
    callback: (value: string) => void;
    info?: GeolocationResponse;
    error?: GeolocationError;
};

const getPosition = ({ success, callback, info, error }: Params) => {
    if (success) {
        console.log(info?.coords);
        callback(`lat: ${info?.coords.latitude}, lon: ${info?.coords.longitude}`);
        return;
    }
    callback(`*ERROR* ${error?.message}`);
};

export const Geoposition = () => {
    const [geoposition, setGeoposition] = useState('');

    Geolocation.getCurrentPosition(
        (info) => getPosition({ success: true, callback: setGeoposition, info }),
        (error) => getPosition({ success: false, callback: setGeoposition, error }),
    );

    return (
        <View style={styles.body}>
            <View style={styles.label}>
                <Text>Geolocation:</Text>
            </View>
            <View style={styles.wrapper}>
                <Text>{geoposition}</Text>
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
