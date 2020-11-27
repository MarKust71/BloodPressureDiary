import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const AppContainer = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ paddingTop: 25 }}>
                <View style={styles.header}>
                    <Text>App</Text>
                </View>
            </SafeAreaView>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
});
