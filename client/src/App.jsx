import React from 'react';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Switch>
                <DndProvider backend={HTML5Backend}>
                    <Header/>
                    <Route path="/:year?/:month?">
                        <Homepage />
                    </Route>
                </DndProvider>
            </Switch>
        </Router>
    );
};

export default App;