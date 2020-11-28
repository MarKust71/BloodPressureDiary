import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AppContainer } from 'ui/AppContainer';

const Stack = createStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="main" options={{ headerTitleAlign: 'center' }} component={AppContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
