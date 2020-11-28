import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Inputs } from 'ui/Inputs';

export const AppContainer = () => {
    return (
        <SafeAreaView style={styles.body}>
            <Inputs />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {},
});
