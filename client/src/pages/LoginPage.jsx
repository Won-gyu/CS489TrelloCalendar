import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import "../style/auth.css";


const LoginPage = ({ users, setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleLogin = () => {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            setUser(user);
            history.push("/manage");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="container login-container">
            <h2 className="lrh2">Login</h2>
            <label className="lrlbl">Email:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label className="lrlbl">Password:</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="lrbtn" onClick={handleLogin}>Login</button>
            <button className="lrbtn" onClick={() => history.push("/register")}>Register</button>
            <button className="lrbtn" onClick={() => history.push("/")}>Go to Main Page</button>
        </div>
    );
};

export default LoginPage;