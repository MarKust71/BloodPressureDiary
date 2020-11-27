import React from 'react';
import { Text, View } from 'react-native';
import { Portal } from 'react-native-paper';

export const AppContainer = () => {
    return (
        <Portal>
            <View>
                <Text>App</Text>
            </View>
        </Portal>
    );
};
