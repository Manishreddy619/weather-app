import React from 'react';

const CurrentDayDescriptionItem = ({ humidity, temperature_max, temperature_min, wind }) => (
    <>
        <div className="d-flex justify-content-between m-3">
            <p className="mb-0 font-weight-bolder text-uppercase"> humidtiy: {humidity} %</p>
        </div>
        <div className="d-flex justify-content-between m-3">
            <p className="mb-0 font-weight-bolder text-uppercase"> max_temp: {temperature_max} °C</p>
        </div>
        <div className="d-flex justify-content-between m-3">
            <p className="mb-0 font-weight-bolder text-uppercase"> min_temp: {temperature_min} °C</p>
        </div>
        <div className="d-flex justify-content-between m-3">
            <p className="mb-0 font-weight-bolder text-uppercase"> wind: {wind} Km/h</p>
        </div>
    </>
);

export default CurrentDayDescriptionItem;
