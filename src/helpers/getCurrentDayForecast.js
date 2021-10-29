import moment from 'moment';

const getCurrentDayForecast = (data, title) => {
    console.log(data, title);
    return {
        weekday: moment(data.timezone).format('dddd'),
        date: data.timezone,
        location: title,
        temperature: Math.round(data.main.temp),
        weatherIcon: data.weather[0].icon,
        weatherDescription: data.weather[0].description,
        humidity: Math.round(data.main.humidity),
        temperature_max: Math.round(data.main.temp_max),
        temperature_min: Math.round(data.main.temp_min),
        wind: data.wind.speed,
    };
};

export default getCurrentDayForecast;
