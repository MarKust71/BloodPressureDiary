import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import { Inputs } from 'ui/Inputs';
import { TimeLabel } from 'ui/TimeLabel';
import { PressureLabel } from 'ui/PressureLabel';
import { getPressure } from 'api/barometerSubscription';
import { Geoposition } from 'ui/Geoposition';

const wait = (timeout: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
};

export const AppContainer = () => {
    const [pressure, setPressure] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        getPressure(setPressure);
    }, []);

    return (
        <SafeAreaView style={styles.body}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <TimeLabel />
                <PressureLabel pressure={pressure} />
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
