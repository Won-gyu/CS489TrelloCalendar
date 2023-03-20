import React, { Fragment, useState } from "react";
import Item from '../components/Item';
import DropWrapper from "../components/DropWrapper";
import ColWrapper from '../components/Col';
import { getDayFromDate, getLastDayFromMonthAndYear } from '../utils';
import { data, statuses, daysOfWeek } from '../data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DashboardHeader from "../components/DashboardHeader";
import { useParams } from "react-router-dom";

const Homepage = (props) => {
    const [items, setItems] = useState(data);

    // TODO: work with month and year
    const { month = 4, year = 2023 } = useParams();

    const onDrop = (item, monitor, status, day) => {
        const mapping = statuses.find(si => si.status === status);
        const date = (new Date(year, month - 1, day)).toDateString();

        setItems(prevState => {
            // console.log('@@@ ' + JSON.stringify(prevState));
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon, date: date });
            return [ ...newItems ];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [ ...newItems ];
        });
    };

    const endDayOfMonth = getLastDayFromMonthAndYear(year, month);

    const dropWrappers = [];

    const dayWrapper = (day) => 
        <Col className="day">
            <div key={day} className={"col-wrapper"}>
                <h2 className={"col-header"}>{day}</h2>
                <DropWrapper onDrop={onDrop} day={day}>
                    <ColWrapper>
                        {items
                            .filter(i => { return i.date == new Date(year, month - 1, day).toDateString(); })
                            .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={i.status} />)
                        }
                    </ColWrapper>
                </DropWrapper>
            </div>
        </Col>

    const weekCalendar = (startDay, endDay) => {
        const view = [];
        for (let day = startDay; day <= endDay; day++) {
            view.push(<> { dayWrapper(day) } </>)
        }
        return view;
    }

    let prevDay = 1;
    for (let day = 1; day <= endDayOfMonth; day++) {
        const date = new Date(year, month - 1, day);
        const isEndDayOfMonth = date.getDate() == endDayOfMonth;
        const newRow = isEndDayOfMonth || date.getDay() % 7 == 6;

        if (newRow) {
            dropWrappers.push(<Row>{ weekCalendar(prevDay, day) }</Row>);
            prevDay = day + 1;
        }
    }
    
    return (
        <div className='calendarPage'>
            <DashboardHeader year={year} month={month}/>
            <div style={{ display: 'block' }}>
                {
                    dropWrappers
                }
            </div>
        </div>
    );
};

export default Homepage;