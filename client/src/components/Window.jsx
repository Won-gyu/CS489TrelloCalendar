import React from "react";
import Modal from "react-modal";
const moment = require('moment');

Modal.setAppElement("#app");

const Window = ({ show, onClose, item }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"my-modal"}
            overlayClassName={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div>
                <h2>Description</h2>
                <p>{item.content}</p>
                <h2>Status</h2>
                <p>{item.icon} {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}</p>
                <h2>Date</h2>
                <p>{ moment(new Date(item.date)).format('YYYY - MM - DD') }</p>
            </div>
        </Modal>
    );
};

export default Window;