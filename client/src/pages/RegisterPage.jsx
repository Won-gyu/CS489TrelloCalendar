import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import "../style/auth.css";


const RegisterPage = ({ users, setUsers }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleRegister = () => {
        if (users.some(user => user.email === email)) {
            alert("Email already exists");
        } else {
            setUsers([...users, { email, password }]);
            history.push("/");
        }
    };

    return (
        <div className="container register-container">
            <h2 className="lrh2">Register</h2>
            <label className="lrlbl">Email:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label className="lrlbl">Password:</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="lrbtn" onClick={handleRegister}>Register</button>
            <button className="lrbtn" onClick={() => history.push("/")}>Go to Main Page</button>
        </div>
    );
};

export default RegisterPage;
