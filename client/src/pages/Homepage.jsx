import React, { useState } from "react";
import Item from '../components/Item';
import DropWrapper from "../components/DropWrapper";
import Col from '../components/Col';
import { getDayFromDate, getLastDayFromMonthAndYear } from '../utils';
import { data, statuses, daysOfWeek } from '../data';

const Homepage = () => {
    const [items, setItems] = useState(data);

    const onDrop = (item, monitor, status, date) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon, date });
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

    // TODO: work with month and year
    const month = 4;
    const year = 2023;
    const endDayOfMonth = getLastDayFromMonthAndYear(year, month);

    const dropWrappers = [];

    const dayWrapper = (day) => 
        <div key={day} className={"col-wrapper"}>
            <h2 className={"col-header"}>{day}</h2>
            <DropWrapper>
                <Col>
                    {items
                        .filter(i => getDayFromDate(i.date).getDay() === new Date(year, month, day))
                        .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={i.status} />)
                    }
                </Col>
            </DropWrapper>
        </div>

    const weekCalendar = (startDay, endDay) => {
        const view = [];
        for (let day = startDay; day < endDay; day++) {
            view.push(<> { dayWrapper(day) } </>)
        }
        return view;
    }

    let prevDay = 0;
    for (let day = 0; day < endDayOfMonth; day++) {
        const date = new Date(year, month - 1, day);
        const newRow = date.getDate() == endDayOfMonth || date.getDay() % 7 == 6;

        if (newRow) {
            dropWrappers.push(<div className={'row'}>{ weekCalendar(prevDay, day) }</div>);
            // newRow ? 
            //     <div className={'row'}>
            //         { 
            //         column(day)
            //         }
            //     </div> : 
            //     column(day)
            prevDay = day;
        }
    }

    return (
        <div className={'row'}>
            {
                dropWrappers
            // daysOfWeek.map(d => {
            //     return (
                    // <div key={d.day} className={"col-wrapper"}>
                    //     <h2 className={"col-header"}>{d.dayStr.toUpperCase()}</h2>
                    //     <DropWrapper onDrop={onDrop} /*status={s.status}*/>
                    //         <Col>
                    //             {items
                    //                 .filter(i => getDayFromDate(i.date).getDay() === d.day)
                    //                 .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={i.status} />)
                    //             }
                    //         </Col>
                    //     </DropWrapper>
                    // </div>
                // );
            // })
            }
        </div>
    );
};

export default Homepage;