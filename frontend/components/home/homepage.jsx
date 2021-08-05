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
// import ban1 from "public/images/ban1.jpg"
import Slider from '../slider/Slider'


const Homepage = () => {
    const categories = [
    "Minority-Owned",
    "Farmers Market",
    "Women-Owned",
    "Veteran-Owned",
    "Disability-Owned"
    ]
    
    const ban1 = "images/ban1.jpg";
    const ban2 = "images/ban2.jpg";
    const ban3 = "images/ban3.jpg";
    const ban4 = "images/ban4.jpg";

    const bannerImages = [ban1, ban2, ban3, ban4]

    {bannerImages.map(ban => <img src={ban}/> )}
    
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