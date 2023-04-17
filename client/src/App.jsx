import React, { useState } from 'react';
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
import { useCookies } from 'react-cookie';

const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['trelloUserData']);
    const [user, setUser] = useState(null);

    const setUsers = (users) => {
        setCookie('trelloUserData', users);
    }

    const getUsers = () => {
        return cookies.trelloUserData || [];
    }
    const users = getUsers();

    return (
        <BrowserRouter>
            <DndProvider backend={HTML5Backend}>
                <Header user={user} setUser={setUser} />
                <Switch>
                    <Route path="/login">
                        <LoginPage users={users} setUser={setUser} />
                    </Route>
                    <Route path="/register">
                        <RegisterPage users={users} setUsers={setUsers} />
                    </Route>
                    {user ?
                        <Route exact path="/">
                            <Homepage />
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