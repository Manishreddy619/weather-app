import React, { useState } from 'react';
import propTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ getlocation }) => {
    const [location, setlocation] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        getlocation(location);
        if (!location || location === '') return;
        setlocation('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="City you 🕵️‍♀️ for  ex...Berin "
                required
                value={location}
                onChange={e => setlocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={handleSubmit}>
                Find here
            </button>
        </form>
    );
};
Form.prototypes = {
    getlocation: propTypes.func.isRequired,
};

export default Form;
