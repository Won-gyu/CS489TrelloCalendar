import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginPage = ({ users, setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleLogin = () => {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            setUser(user);
            history.push("/");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <label>Email:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => history.push("/register")}>Register</button>
            <button onClick={() => history.push("/")}>Go to Main Page</button>
        </div>
    );
};

export default LoginPage;