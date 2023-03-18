import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const DashboardHeader = ({year, month}) => {
    return (
        <Row className='page-subheader'>
            <Col className='col' xs="auto" md="auto">
                <Button variant="primary" size="lg" onClick={() => {  }} active>
                ←
                </Button>
            </Col>
            <Col className='col'>
                {/* <p>{month}, {year}</p>  */}
                <p className={'page-subheader middle'}>{month}, {year}</p>
            </Col>
            <Col className='col' xs="auto" md="auto">
                <Button variant="primary" size="lg" onClick={() => {  }} active>
                →
                </Button>
            </Col>
        </Row>
    );
};

export default DashboardHeader;