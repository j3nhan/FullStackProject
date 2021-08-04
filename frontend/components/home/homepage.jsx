import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = ({ currentUser, signoutUser }) => {
    const initialHome = () => (
        <nav>
            <Link to='/signin'>Sign-In</Link>
            <br />
            <Link to='/signup'>Sign Up</Link>
        </nav>
    );

    const userHome = () => (
        <div>
            <h2>Welcome {currentUser.name}!</h2>
            <button onClick={signoutUser}>Sign Out</button>
        </div>
    );
    return currentUser ? userHome() : initialHome();
};

export default Homepage;