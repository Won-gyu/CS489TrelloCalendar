import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
        <div className="container">
            <h2>Register</h2>
            <label>Email:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
            <button onClick={() => history.push("/")}>Go to Main Page</button>
        </div>
    );
};

export default RegisterPage;
