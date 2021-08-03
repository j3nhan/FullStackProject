import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = ({ currentUser, logoutUser }) => {
    const initialHome = () => (
        <nav>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
        </nav>
    );

    const userHome = () => (
        <div>
            <h2>Welcome {currentUser.firstName}!</h2>
            <button onClick={logoutUser}>Log Out</button>
        </div>
    );
    console.log(currentUser);
    return currentUser ? userHome() : initialHome();
};

export default Homepage;