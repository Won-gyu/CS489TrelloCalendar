import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import "../style/auth.css";


const LoginPage = ({ setUser }) => {
    const apiUrl = 'http://localhost:3000/login';

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleLogin = () => {
        fetch(apiUrl, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })
            .then((response) => {
                // Check if the request was successful.
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((user) => {
                console.log(user);
                if (user) {
                    setUser(user);
                    history.push("/manage");
                } else {
                    console.error('Error fetching data:', error);
                }
            })
            .catch((error) => {
                alert("Email does not exist");
                console.error('Error fetching data:', error);
            });
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