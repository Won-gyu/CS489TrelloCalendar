import React from 'react';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
    BrowserRouter,

    Switch,
    Route,
    Link
  } from "react-router-dom";
//   import { createBrowserHistory } from 'history';

const App = () => {
    // const history = createBrowserHistory();
    return (
        <BrowserRouter>
            <Switch>
                <DndProvider backend={HTML5Backend}>
                    <Header/>
                    <Route path="/:year?/:month?" history={history}>
                        <Homepage />
                    </Route>
                </DndProvider>
            </Switch>
        </BrowserRouter>
    );
};

export default App;