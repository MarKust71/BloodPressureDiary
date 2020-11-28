import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AppContainer = () => {
    return (
        <SafeAreaView style={styles.body}>
            <View>
                <Text>App</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {},
});
