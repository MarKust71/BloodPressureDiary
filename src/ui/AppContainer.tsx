import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';
import { Formik } from 'formik';
import Clipboard from '@react-native-community/clipboard';

import { Inputs } from 'ui/Inputs';
import { TimeLabel } from 'ui/TimeLabel';
import { SensorAirPressure } from 'ui/SensorAirPressure';
import { getSensorPressure } from 'helpers/getSensorPressure';
import { Geoposition } from 'ui/Geoposition';
import { OpenWeatherAirPressure } from 'ui/OpenWeatherAirPressure';
import { getCurrentDateTimeString } from 'helpers/getCurrentDateTimeString';
import { getPosition } from 'helpers/getPosition';
import { ConfirmButton } from 'ui/ConfirmButton';

export const AppContainer = () => {
    const [sensorPressure, setSensorPressure] = useState('');
    const [openWeatherPressure, setOpenWeatherPressure] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const [time, setTime] = useState(getCurrentDateTimeString());
    const [geoposition, setGeoposition] = useState('');

    Geolocation.getCurrentPosition(
        (info) =>
            getPosition({
                success: true,
                callbackCoordinates: setGeoposition,
                info,
                callbackOpenWeatherAirPressure: setOpenWeatherPressure,
            }),
        (error) =>
            getPosition({
                success: false,
                callbackCoordinates: setGeoposition,
                error,
                callbackOpenWeatherAirPressure: setOpenWeatherPressure,
            }),
    );

    const onRefresh = useCallback(() => {
        setTime(getCurrentDateTimeString());
        setRefreshing(false);
    }, []);

    useEffect(() => {
        getSensorPressure(setSensorPressure);
        // setOpenWeatherPressure(888);
    }, []);

    return (
        <SafeAreaView style={styles.body}>
            <Formik
                initialValues={{ sys: '', dia: '', pul: '' }}
                onSubmit={(values) => {
                    console.log('values:', values);
                    Clipboard.setString(time);
                }}
            >
                {({ values, handleSubmit, handleChange }) => (
                    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                        <TimeLabel time={time} />
                        <SensorAirPressure pressure={sensorPressure} />
                        <OpenWeatherAirPressure pressure={openWeatherPressure} />
                        <Geoposition geoposition={geoposition} />
                        <Inputs values={values} handleChange={handleChange} />
                        <ConfirmButton onPress={handleSubmit} />
                    </ScrollView>
                )}
            </Formik>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        margin: 10,
    },
});
