
// import React, { useState } from 'react';
// import Homepage from './pages/Homepage';
// import Header from './components/Header';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import {
//     BrowserRouter,
//     Switch,
//     Route
// } from "react-router-dom";

// const App = () => {
//     const [users, setUsers] = useState([]);
//     const [user, setUser] = useState(null);

//     return (
//         <BrowserRouter>
//             <Switch>
//                 <DndProvider backend={HTML5Backend}>
//                     <Header user={user} />
//                     <Route exact path="/" history={history}>
//                         <Homepage />
//                     </Route>
//                     <Route path="/login">
//                         <LoginPage users={users} setUser={setUser} />
//                     </Route>
//                     <Route path="/register">
//                         <RegisterPage users={users} setUsers={setUsers} />
//                     </Route>
//                 </DndProvider>
//             </Switch>
//         </BrowserRouter>
//     );
// };

// export default App;


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
                    <Route exact path="/" history={history}>
                        <Homepage />
                    </Route>
                    <Route path="/login">
                        <LoginPage users={users} setUser={setUser} />
                    </Route>
                    <Route path="/register">
                        <RegisterPage users={users} setUsers={setUsers} />
                    </Route>
                </DndProvider>
            </Switch>
        </BrowserRouter>
    );
};

export default App;

