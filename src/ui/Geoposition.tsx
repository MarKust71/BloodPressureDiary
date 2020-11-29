import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

type Props = {
    geoposition: string;
};

export const Geoposition = ({ geoposition }: Props) => {
    return (
        <View style={styles.body}>
            <View style={styles.label}>
                <Text>Geolocation:</Text>
            </View>
            <View style={styles.wrapper}>
                <Text>{geoposition}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    label: {},
    wrapper: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
});
