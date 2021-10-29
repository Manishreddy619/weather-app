import { useState } from 'react';
import axios from 'axios';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;
const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isloading, setIsloading] = useState(false);
    const [forecast, setforecast] = useState(null);
    const getlocationForApi = async loc => {
        // console.log(loc);

        try {
            const { data } = await axios(
                `https://api.openweathermap.org/data//2.5/weather?q=${loc || ''}&units=metric&appid=${
                    process.env.REACT_APP_API_KEY
                }`
            );
            setIsloading(true);
            setError(false);
            if (data) {
                console.log(data);
                const currentDayForecast = getCurrentDayForecast(data, data.name);
                setforecast(currentDayForecast);
                setIsloading(false);
                return data;
            } else {
                setError('their is no such location');
                return;
            }
        } catch (error) {
            console.log(error);
            setError('something went wrong');
        }
    };
    return {
        isError,
        isloading,
        forecast,
        getlocationForApi,
    };
};
export default useForecast;
