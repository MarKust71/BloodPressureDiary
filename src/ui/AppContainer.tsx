import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Inputs } from 'ui/Inputs';
import { TimeLabel } from 'ui/TimeLabel';

export const AppContainer = () => {
    return (
        <SafeAreaView style={styles.body}>
            <TimeLabel />
            <Inputs />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        margin: 10,
    },
});
