import React from 'react';
// import { Link } from 'react-router-dom';

// const Homepage = ({ currentUser, signoutUser }) => {
//     const initialHome = () => (
//         <nav>
//             <Link to='/signin'>Sign-In</Link>
//             <br />
//             <Link to='/signup'>Sign Up</Link>
//         </nav>
//     );

//     const userHome = () => (
//         <div>
//             <h2>Welcome {currentUser.name}!</h2>
//             <button onClick={signoutUser}>Sign Out</button>
//         </div>
//     );
//     return currentUser ? userHome() : initialHome();
// };

// export default Homepage;


// -------------------------
const categories = [
    "Minority-Owned",
    "Farmers Market",
    "Women-Owned",
    "Veteran-Owned",
    "Disability-Owned"
]

const items = [

]

const Homepage = () => {
    return (
        <div>
            <div className="item-container">
                {categories && categories.map((category, idx) =>
                    <p>{category}</p>)}
            </div>

            <div className="home">
                <div className="home-container">
                    {/* slider */}
                    <div className="home-row"> 
                        {/* items */}
                    </div>

                    <div style={{marginTop: "40px"}}>
                        {/* Back to Top */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;