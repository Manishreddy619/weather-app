import React, { Fragment } from 'react';
import styles from './Page.module.css';
import Header from '../Header';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';
import Form from '../Form';
import useForecast from '../../hooks/useForecast';

const Page = () => {
    const { isError, isloading, forecast, getlocationForApi } = useForecast();
    const getLOcation = loc => {
        getlocationForApi(loc);
    };
    return (
        <Fragment>
            <Header />
            {!forecast && (
                <div className={`${styles.box} positon=relative`}>
                    {!isloading && <Form getlocation={getLOcation} />}
                    {isError && <Error message={isError} />}
                    {isloading && <Loader />}
                </div>
            )}
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};

export default Page;
