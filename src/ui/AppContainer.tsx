import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import { Inputs } from 'ui/Inputs';
import { TimeLabel } from 'ui/TimeLabel';
import { SensorAirPressure } from 'ui/SensorAirPressure';
import { getSensorPressure } from 'helpers/barometerSubscription';
import { Geoposition } from 'ui/Geoposition';
import { OpenWeatherAirPressure } from 'ui/OpenWeatherAirPressure';
import { getCurrentDateTimeString } from 'helpers/getCurrentDateTimeString';

export const AppContainer = () => {
    const [sensorPressure, setSensorPressure] = useState(0);
    const [openWeatherPressure, setOpenWeatherPressure] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const [time, setTime] = useState(getCurrentDateTimeString());

    const onRefresh = useCallback(() => {
        setTime(getCurrentDateTimeString());
        setRefreshing(false);
    }, []);

    useEffect(() => {
        getSensorPressure(setSensorPressure);
        setOpenWeatherPressure(999);
    }, []);

    return (
        <SafeAreaView style={styles.body}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <TimeLabel time={time} />
                <SensorAirPressure pressure={sensorPressure} />
                <OpenWeatherAirPressure pressure={openWeatherPressure} />
                <Geoposition />
                <Inputs />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        margin: 10,
    },
});
