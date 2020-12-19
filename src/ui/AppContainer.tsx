import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';
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

export interface Result {
    sys: string | undefined;
    dia: string | undefined;
    pul: string | undefined;
}

export interface InputsData extends Result {
    label: string;
}

export const AppContainer = () => {
    const [sensorPressure, setSensorPressure] = useState('');
    const [openWeatherPressure, setOpenWeatherPressure] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const [time, setTime] = useState(getCurrentDateTimeString());
    const [geoposition, setGeoposition] = useState('');
    const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(true);

    const initResults: Result[] = [
        { sys: undefined, dia: undefined, pul: undefined },
        { sys: undefined, dia: undefined, pul: undefined },
        { sys: undefined, dia: undefined, pul: undefined },
    ];
    const [results, setResults] = useState<Result[]>(initResults)

    const handleInputsData = (measurement: InputsData) => {
        switch (measurement.label) {
            case '1:':
                results[0] = { sys: measurement.sys, dia: measurement.dia, pul: measurement.pul };
                break;
            case '2:':
                results[1] = { sys: measurement.sys, dia: measurement.dia, pul: measurement.pul };
                break;
            case '3:':
                results[2] = { sys: measurement.sys, dia: measurement.dia, pul: measurement.pul };
                break;
            default:
                break;
        }
        setResults(results)
        let allInputsFilledOut = true;
        results.map((result) => {
            allInputsFilledOut = allInputsFilledOut && !!result.sys && !!result.dia && !!result.pul;
        });
        setConfirmButtonDisabled(!allInputsFilledOut);
    };

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
    }, []);

    const handleSubmit = () => {
        let message = time + '\n';
        message = message + geoposition + '\n';
        results.map((result) => (message = message + `${result.sys} ${result.dia} ${result.pul}` + '\n'));
        message = message + sensorPressure + ' sens' + '\n';
        message = message + openWeatherPressure + ' accu' + '\n\n';
        Clipboard.setString(message);
    };

    return (
        <SafeAreaView style={styles.body}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <TimeLabel time={time} />
                <SensorAirPressure pressure={sensorPressure} />
                <OpenWeatherAirPressure pressure={openWeatherPressure} />
                <Geoposition geoposition={geoposition} />
                <Inputs handleInputsData={handleInputsData} />
                <ConfirmButton disabled={confirmButtonDisabled} onPress={handleSubmit} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        margin: 10,
    },
});
