import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const AppContainer = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.body}>
                <View>
                    <Text>App</Text>
                </View>
            </SafeAreaView>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    body: {},
});
