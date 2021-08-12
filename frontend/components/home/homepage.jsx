import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Slider from '../slider/Slider'
import Item from '../item/Item';
import { items } from '../../util/itemsData'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const categories = [
"Mom & Pop",
"Farmers Market",
"Women-Owned",
"Veteran-Owned",
"Disability-Owned"
]

const ban1 = "images/banner1.jpg";
const ban2 = "images/banner2.jpg";
const ban3 = "images/banner3.jpg";
const ban4 = "images/banner4.jpg";

const bannerImages = [ban1, ban2, ban3, ban4]

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.userHomepage = this.userHomepage.bind(this);
        this.guestHomepage = this.guestHomepage.bind(this);
        this.signedoutHome = this.signedoutHome.bind(this);
        this.returnHome = this.returnHome.bind(this);
    }
    
    // {bannerImages.map(ban => <img src={ban}/> )}

    signedoutHome() {
        this.props.signoutUser();
        this.props.history.push('/');
    }

    returnHome() {
        let data = '';
        this.props.fetchItems(data);
    }

    userHomepage() {
        return (
            <div>
                <nav className="header">   
                    <Link to="/">
                        <img className="header-logo" src="images/valyou-logo.png"/>
                    </Link>

                    <div className="header-option" style={{marginRight: "-10px"}}>
                        <LocationOnIcon/>
                    </div>

                    <div className="header-option">
                        <span className="header-option1">Deliver to {this.props.currentUser.name.split(" ")[0]}</span>
                        <span className="header-option2">Select Your Address</span>
                    </div>

                    <div className="search">
                        <select>
                            <option>All</option>
                        </select>
                        <input type="text" className="searchInput" />
                        <SearchIcon className="searchIcon" />
                    </div>

                    <div className="header-nav">
                        <Link to='/signin' className='header-link'>
                            <div className="header-option">
                                <span className="header-option1">Hello, {this.props.currentUser.name.split(" ")[0]}</span>
                                <button className='header-option2' type='submit' onClick={this.signedoutHome}>Sign Out</button>
                            </div>
                        </Link>

                        <Link to='/orders' className='header-link'>
                            <div className="header-option">
                                <span className="header-option1">Returns</span>
                                <span className="header-option2">& Orders</span>
                            </div>
                        </Link>

                        <Link to='/checkout' className='header-link'>
                            <div className="header-basket">
                                <ShoppingCartIcon/>
                                <span className="header-option2 basket-count">0</span>
                            </div>
                        </Link>
                    </div>
                </nav>

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
                                    itemName={item.name}
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
                                    name={item.name}
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
                                    name={item.name}
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
    };

    guestHomepage() {
        return (
            <div>
                <nav className="header">   
                    <Link to="/">
                        <img className="header-logo" 
                            src="images/valyou-logo.png"
                            alt="valyou-logo" 
                            />
                    </Link>

                    <div className="header-option" style={{marginRight: "-10px"}}>
                        <LocationOnIcon/>
                    </div>

                    <div className="header-option">
                        <span className="header-option1">Deliver to</span>
                        <span className="header-option2">Select Your Address</span>
                    </div>

                    <div className="search">
                        <select>
                            <option>All</option>
                        </select>
                        <input type="text" className="searchInput" />
                        <SearchIcon className="searchIcon" />
                    </div>

                    <div className="header-nav">
                        <Link to='/signin' className='header-link'>
                            <div className="header-option">
                                <span className="header-option1">Hello</span>
                                <span className="header-option2">Sign In</span>
                            </div>
                        </Link>

                        <Link to='/orders' className='header-link'>
                            <div className="header-option">
                                <span className="header-option1">Returns</span>
                                <span className="header-option2">& Orders</span>
                            </div>
                        </Link>

                        <Link to='/checkout' className='header-link'>
                            <div className="header-basket">
                                <ShoppingCartIcon/>
                                <span className="header-option2 basket-count">0</span>
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    };

    render() {
        return this.props.currentUser ? this.userHomepage() : this.guestHomepage();
    };
};

export default Homepage;