import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import CurrentDay from '../CurrentDay';
import CurreentDayDescription from '../CurrentDayDescription';
import styles from './Forecast.module.css';

const Forecast = ({ forecast }) => {
    console.log(forecast);
    return (
        <Container className={styles.box}>
            <Row>
                <Col xs={12} md={4}>
                    <div className={styles.card}>
                        <CurrentDay {...forecast} />
                    </div>
                </Col>
                <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                    <CurreentDayDescription forecast={forecast} />
                </Col>
            </Row>
        </Container>
    );
};

export default Forecast;
