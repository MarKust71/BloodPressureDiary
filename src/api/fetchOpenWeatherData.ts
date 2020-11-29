type FetchDataParams = {
    url: string;
    lat: string;
    lon: string;
    appid: string;
};

export const fetchOpenWeatherData = ({ url, lat, lon, appid }: FetchDataParams) => {
    fetch(`${url}lat=${lat}&lon=${lon}&appid=${appid}`)
        .then((result) => result.json())
        .then((data) => console.log('pressure:', data.main.pressure));
};
