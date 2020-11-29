import { GeolocationError, GeolocationResponse } from '@react-native-community/geolocation';

import { fetchOpenWeatherData } from 'api/fetchOpenWeatherData';
import { OPENWEATHER_APPID, OPENWEATHER_URL } from '../../dotenv';

type Params = {
    success: boolean;
    callbackCoordinates: (value: string) => void;
    info?: GeolocationResponse;
    error?: GeolocationError;
    callbackOpenWeatherAirPressure: (value: number) => void;
};

export const getPosition = ({ success, callbackCoordinates, info, error, callbackOpenWeatherAirPressure }: Params) => {
    if (success) {
        callbackCoordinates(`lat: ${info?.coords.latitude}, lon: ${info?.coords.longitude}`);

        fetchOpenWeatherData({
            url: OPENWEATHER_URL || '',
            lat: `${info?.coords.latitude}`,
            lon: `${info?.coords.longitude}`,
            appid: OPENWEATHER_APPID || '',
            callback: callbackOpenWeatherAirPressure,
        });

        return;
    }
    fetchOpenWeatherData({
        url: OPENWEATHER_URL || '',
        lat: '51.0807704',
        lon: '16.989052',
        appid: OPENWEATHER_APPID || '',
        callback: callbackOpenWeatherAirPressure,
    });

    callbackCoordinates(`*ERROR* ${error?.message}`);
};
