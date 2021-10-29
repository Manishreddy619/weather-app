import React from 'react';
import CurrentDayDescriptionItem from '../CurrentDayDescriptionItem';
const CurrentDayDescription = ({ forecast }) => (
    <div className="mt-4 mt-md-2">
        <div className="d-flex flex-column mb-2">
            <CurrentDayDescriptionItem {...forecast} />
        </div>
    </div>
);

export default CurrentDayDescription;
