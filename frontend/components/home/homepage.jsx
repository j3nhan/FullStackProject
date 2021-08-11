import React from 'react';
// import { Link } from 'react-router-dom';

// const Homepage = ({ currentUser, signoutInit }) => {
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
//             <button onClick={signoutInit}>Sign Out</button>
//         </div>
//     );
//     return currentUser ? userHome() : initialHome();
// };

// export default Homepage;
            
            
// -------------------------
import Slider from '../slider/Slider'
import Item from '../item/Item';
import { items } from '../../util/itemsData'
  
const Homepage = () => {
    const categories = [
    "Mom & Pop",
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
                    <p key={ idx }>{category}</p>)}
            </div>

            <div className="home">
                <div className="home-container">
                    <Slider images={bannerImages} />

                    <div className="home-row"> 
                        {items.slice(0, 2).map((item) => (
                            <Item key={item.id}
                                id={item.id}
                                itemName={item.ItemName}
                                rating={item.rating}
                                price={item.price}
                                photo={item.photo}
                                description={item.description}
                            /> 
                        ))}
                    </div>

                    <div className="home-row"> 
                        {items.slice(2, 5).map((item) => (
                            <Item key={item.id}
                                id={item.id}
                                itemName={item.ItemName}
                                rating={item.rating}
                                price={item.price}
                                photo={item.photo}
                                description={item.description}
                            /> 
                        ))}
                    </div>
                    
                    <div className="home-row"> 
                        {items.slice(5, 6).map((item) => (
                            <Item key={item.id}
                                id={item.id}
                                itemName={item.ItemName}
                                rating={item.rating}
                                price={item.price}
                                photo={item.photo}
                                description={item.description}
                            /> 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;