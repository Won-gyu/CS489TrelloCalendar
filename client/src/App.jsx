import React, { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import ProjectManager from './pages/ProjectManager';

const App = () => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const apiUrl = 'https://trello-calendar-server.onrender.com/user';

    const refreshUsers = () => {
        fetch(apiUrl)
            .then((response) => {
                // Check if the request was successful.
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((users) => {
                console.log(users);
                setUsers(users);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        refreshUsers();
      }, []);

    const saveUsers = (users) => {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(users),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((users) => {
            setUsers(users);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }

    return (
        <BrowserRouter>
            <DndProvider backend={HTML5Backend}>
                <Header user={user} setUser={setUser} />
                <Switch>
                    <Route path="/login">
                        <LoginPage setUser={setUser} />
                    </Route>
                    <Route path="/manage">
                        <ProjectManager />
                    </Route>
                    <Route path="/register">
                        <RegisterPage users={users} setUsers={saveUsers} />
                    </Route>
                    {user ?
                        <Route path="/:year?/:month?" history={history}>
                            <Homepage user={user}/>
                        </Route>
                        :
                        <Route exact path="/">
                            <Redirect to="/login" />
                        </Route>
                    }
                </Switch>
            </DndProvider>
        </BrowserRouter>
    );
};

export default App;