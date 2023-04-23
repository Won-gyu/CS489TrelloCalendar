
import React, { useState } from 'react';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ProjectManager from './pages/ProjectManager';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";


const App = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <Switch>
                <DndProvider backend={HTML5Backend}>
                    <Header user={user} setUser={setUser} />
                    <Route path="/">
                        <LoginPage users={users} setUser={setUser} />
                    </Route>
                    <Route path="/register">
                        <RegisterPage users={users} setUsers={setUsers} />
                    </Route>
                    <Route path="/homepage">
                        <Homepage />
                    </Route>
                    <Route path="/manager">
                        <ProjectManager />
                    </Route>
                </DndProvider>
            </Switch>
        </BrowserRouter>
    );
};

export default App;

