import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Clipboard from '@react-native-community/clipboard';

export const ConfirmButton = () => {
    const handlePress = () => {
        Clipboard.setString('schowek');
        console.log('schowek');
    };

    return (
        <View style={styles.root}>
            <Button mode="contained" onPress={handlePress}>
                Confirm
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        width: '100%',
        backgroundColor: 'yellow',
    },
});
