import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { statuses } from '../data';
const moment = require('moment');

Modal.setAppElement("#app");

const Window = ({ show, onClose, item, saveTask }) => {
    const [isEditView, setIsEditView] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [content, setContent] = useState(item.content);
    const [date, setDate] = useState(item.date);
    const [statusIdx, setStatusIdx] = useState(item.statusIdx);

    const onEdit = () => { setIsEditView(!isEditView); }

    useEffect(() => {
        if (!isEditView)
        {
            item.title = title;
            item.content = content;
            item.date = date;
            item.statusIdx = statusIdx;
            saveTask(item);
        }
      }, [isEditView]);

    const options = [];
    for (let i = 0; i < statuses.length; i++) {
        options.push(<option value={statuses[i]}>{ statuses[i].status + " " + statuses[i].icon }</option>);
    }

    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"my-modal"}
            overlayClassName={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                { 
                    isEditView ? 
                        <input style={{ flex: "1 90%" }} type="text" value={title} onChange={(e) => { setTitle(e.target.value); }} />
                        : <h1 style={{ flex: "1 90%" }}>{title}</h1>
                }
                
                <button className="close-btn" onClick={onEdit}>✏️</button>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div>
                <h2>Description</h2>
                { 
                    isEditView ? 
                        <textarea value={content} onChange={(e) => { setContent(e.target.value); }} />
                        : <p>{ content }</p> 
                }
                <h2>Status</h2>
                { 
                    isEditView ? 
                        <select onChange={(e) => { setStatusIdx(e.target.selectedIndex); }}>
                            { options }
                        </select>
                        : <p>{`${statuses[statusIdx].status} ${statuses[statusIdx].icon}`}</p>
                }
                
                <h2>Date</h2>
                { 
                    isEditView ? 
                        <input type="date" value={date} onChange={(e) => { setDate(e.target.value); }} />
                        : <p>{ moment(new Date(date)).utc().format('YYYY - MM - DD') }</p> 
                }
            </div>
        </Modal>
    );
};

export default Window;