import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const DashboardHeader = ({year, month}) => {
    const history = useHistory();

    const routeChange = (year, month) => {
        if (month > 12) {
            year = Number(year) + 1;
            month = 1;
        } else if (month < 1) {
            year = Number(year) - 1;
            month = 12;
        }

        let path = `/${year}/${month}`; 
        history.push(path);
    }

    return (
        <Row className='page-subheader'>
            <Col className='col' xs="auto" md="auto">
                <Button variant="primary" size="lg" onClick={() => { routeChange(year, Number(month )- 1) }} active>
                ←
                </Button>
            </Col>
            <Col className='col'>
                {/* <p>{month}, {year}</p>  */}
                <p className={'page-subheader middle'}>{month}, {year}</p>
            </Col>
            <Col className='col' xs="auto" md="auto">
                <Button variant="primary" size="lg" onClick={() => { routeChange(year, Number(month) + 1) }} active>
                →
                </Button>
            </Col>
        </Row>
    );
};

export default DashboardHeader;