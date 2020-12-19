import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

type Props = {
    onPress: () => void;
    disabled: boolean;
};

export const ConfirmButton = ({ onPress, disabled }: Props) => {
    return (
        <View style={styles.root}>
            <Button disabled={disabled} mode="contained" onPress={onPress}>
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
