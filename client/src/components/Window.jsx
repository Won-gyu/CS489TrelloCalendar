import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { statuses } from '../data';
const moment = require('moment');

Modal.setAppElement("#app");

const Window = ({ user, show, onClose, item, saveTask }) => {
    const [isEditView, setIsEditView] = useState(item == null);
    const [email, setEmail] = useState(item ? item.email : user.email);
    const [title, setTitle] = useState(item ? item.title : "");
    const [content, setContent] = useState(item ? item.content : "");
    const [date, setDate] = useState(item ? item.date : "");
    const [statusIdx, setStatusIdx] = useState(item ? item.statusIdx : 0);

    const onEdit = () => { setIsEditView(!isEditView); }

    useEffect(() => {
        if (!isEditView)
        {
            if (item == null)
            {
                // add task
                item = {};
            }
            item.email = user.email;
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
                
                {
                    email === "" || user.email === email ? <button className="close-btn" onClick={onEdit}>✏️</button> : <></>
                }
                
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div>
                <h4>Author</h4>
                { 
                    isEditView ? <p>{ user.email }</p> : <p>{ email }</p> 
                }
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
                        <input type="date" value={moment(new Date(date)).utc().format('YYYY-MM-DD')} onChange={(e) =>
                            {
                                setDate(moment(e.target.value).utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'));
                            }} />
                        : <p>{ moment(new Date(date)).utc().format('YYYY - MM - DD') }</p> 
                }
            </div>
        </Modal>
    );
};

export default Window;