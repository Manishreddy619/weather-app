import React from 'react';

import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
let dateTime = date + ' ' + time;
const CurrentDay = ({ weekday, location, weatherIcon, temperature, weatherDescription }) => (
    <div className="d-flex">
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div>
                <h2 className="font-weight-bold mb-1">{weekday}</h2>
                <p className="mb-0">{dateTime}</p>
                <span>{location}</span>
            </div>
            <div>
                <img src={weatherIcon} alt="" />
                <h2 className="font-weight-bold mb-1">
                    <span>{temperature}</span>°C
                </h2>
                <h5>{weatherDescription}</h5>
            </div>
        </div>
    </div>
);

export default CurrentDay;
