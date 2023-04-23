import React, { Fragment, useState, useEffect } from "react";
import Item from '../components/Item';
import DropWrapper from "../components/DropWrapper";
import ColWrapper from '../components/Col';
import { removeTask, getLastDayFromMonthAndYear, getTasksByDay } from '../utils';
import { defaultData, statuses, daysOfWeek } from '../data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DashboardHeader from "../components/DashboardHeader";
import { useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Window from "../components/Window";

const Homepage = ({ user }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['trelloData']);
    const getData = () => {
        return cookies.trelloData || defaultData;
    }

    const { month = 4, year = 2023 } = useParams();
    const [items, setItems] = useState(getTasksByDay(getData(), year, month));

    const refreshPage = () => {
        setItems(getTasksByDay(getData(), year, month));
    }

    useEffect(() => {
        console.log(items);
        refreshPage();
      }, [month, year]);

    const saveTask = (item) => {
        const data = getData();
        if (item.id == null)
        {
            item.id = data.length + 1;
        }
        data[item.id - 1] = item;
        setCookie('trelloData', data);
        cookies.data = data;
        refreshPage();
        console.log(cookies.data);
    }

    const onDrop = (item, monitor, status, day) => {
        const mapping = statuses.find(si => si.status === status);
        const date = new Date(year, month - 1, day);

        if (new Date(item.date).getDate() != date.getDate()) {
            setItems(prevState => {
                const newItems = removeTask(prevState, item);
                const itemsOnDay = newItems[day];
                item.date = date.toISOString();
                itemsOnDay.push(item);

                saveTask(item);
    
                return [ ...newItems ];
            });
        }
    };

    const moveItem = (dragIndex, hoverIndex, day) => {
        const item = items[day][dragIndex];
        setItems(prevState => {
            prevState[day] = prevState[day].filter((i, idx) => idx !== dragIndex);
            prevState[day].splice(hoverIndex, 0, item);
            const newItems = prevState;

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
                        { day < items.length ? items[day]
                            .map((i, idx) => <Item user={user} key={i.id} item={i} index={idx} moveItem={moveItem} status={statuses[i.statusIdx]} day={day} saveTask={saveTask} />) : <></>
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

    const [showAddTask, setShowAddTask] = useState(false);
    const onCloseAddTask = () =>
    {
        resetChildState();
        setShowAddTask(false);
    }
    const onAddTask = () => setShowAddTask(true);
    const [childKey, setChildKey] = useState(0);

    const resetChildState = () => {
        setChildKey(prevKey => prevKey + 1);
    };

    return (
        <div className='calendarPage'>
            <DashboardHeader year={year} month={month}/>
            <button className="close-btn" onClick={onAddTask}>✏️</button>
            <div style={{ display: 'block' }}>
                {
                    dropWrappers
                }
                <Window
                    key={childKey}
                    user={user}
                    onClose={onCloseAddTask}
                    show={showAddTask}
                    saveTask={saveTask}
                />
            </div>
        </div>
    );
};

export default Homepage;