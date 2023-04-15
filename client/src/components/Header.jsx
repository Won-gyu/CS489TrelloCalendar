// import React from 'react';

// const Header = () => {
//     return (
//         <div className={'row'}>
//             <p className={'page-header'}>Trello Dashboard<button className='login-btn login-btn-position'>Login</button></p>
//         </div>
//     );
// };

// export default Header;

import React from 'react';
import { useHistory } from "react-router-dom";

const Header = ({ user }) => {
    const history = useHistory();

    const handleLoginClick = () => {
        if (user) {
            alert("You're already logged in!");
        } else {
            history.push("/login");
        }
    };

    return (
        <div className={'row'}>
            <p className={'page-header'}>Trello Dashboard<button className='login-btn login-btn-position' onClick={handleLoginClick}>Login</button></p>
        </div>
    );
};

export default Header;