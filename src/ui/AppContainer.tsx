import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Inputs } from 'ui/Inputs';
import { TimeLabel } from 'ui/TimeLabel';
import { PressureLabel } from 'ui/PressureLabel';
import { getPressure } from 'api/barometerSubscription';

export const AppContainer = () => {
    const [pressure, setPressure] = useState(0);

    useEffect(() => {
        getPressure(setPressure);
    }, []);

    return (
        <SafeAreaView style={styles.body}>
            <TimeLabel />
            <PressureLabel pressure={pressure} />
            <Inputs />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        margin: 10,
    },
});
