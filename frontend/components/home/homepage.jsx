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

// import banners here

const categories = [
    "Minority-Owned",
    "Farmers Market",
    "Women-Owned",
    "Veteran-Owned",
    "Disability-Owned"
]

const Homepage = () => {
    const bannerImages = [b1, b2, b3, b4, b5]
    return (
        <div>
            <div className="item-container">
                {categories && categories.map((category, idx) =>
                    <p>{category}</p>)}
            </div>

            <div className="home">
                <div className="home-container">
                    {/* images props from slider */}
                    <Slider images={bannerImages} />
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