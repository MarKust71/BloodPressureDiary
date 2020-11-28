import { barometer } from 'react-native-sensors';
import { take } from 'rxjs/operators';

export const getPressure = (callback: (value: number) => void) => {
    const sharePressure = (pressure: number) => {
        callback(pressure);
    };

    // const barometerSubscription = barometer
    barometer.pipe(take(1)).subscribe(
        ({ pressure }) => {
            sharePressure(pressure);
        },
        (error) => {
            console.log('Sensor error:', error.message);
        },
    );
};
