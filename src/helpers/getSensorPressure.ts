import { barometer } from 'react-native-sensors';
import { take } from 'rxjs/operators';

export const getSensorPressure = (callback: (value: string) => void) => {
    const sharePressure = (pressure: number) => {
        callback(pressure.toFixed(2));
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
