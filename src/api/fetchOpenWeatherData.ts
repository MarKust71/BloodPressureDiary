type FetchDataParams = {
    url: string;
    lat: string;
    lon: string;
    appid: string;
    callback?: (value: number) => void;
};

export const fetchOpenWeatherData = async ({ url, lat, lon, appid, callback }: FetchDataParams) => {
    const result = await fetch(`${url}lat=${lat}&lon=${lon}&appid=${appid}`);
    const data = await result.json();
    if (callback) {
        callback(data.main.pressure);
    }
};
