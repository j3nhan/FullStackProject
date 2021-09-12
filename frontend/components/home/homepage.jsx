import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Slider from '../slider/Slider'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ItemIndexContainer from '../item/Item_index_container';

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.userHomepage = this.userHomepage.bind(this);
        this.guestHomepage = this.guestHomepage.bind(this);
        this.signedoutHome = this.signedoutHome.bind(this);
        this.returnHome = this.returnHome.bind(this);
    }
    
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
                        <span className="header-option1">Deliver to {this.props.currentUser.name}'s</span>
                        <span className="header-option2">Home Sweet Home</span>
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
                                <span className="header-option1">Hello,</span>
                                <span className="header-option2">{this.props.currentUser.name}</span>
                            </div>
                        </Link>

                        <Link className='header-link'>
                            <div className="header-option">
                                <button className='header-option2-signout' type='submit' onClick={this.signedoutHome}>Sign Out</button>
                            </div>
                        </Link>

                        <Link to='/checkout' className='header-link'>
                            <div className="header-basket-homepage">
                                <ShoppingCartIcon/>
                                <span className="header-option2 basket-count">0</span>
                            </div>
                        </Link>
                    </div>
                </nav>
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
                        <span className="header-option2">Home Sweet Home</span>
                    </div>

                    <div className="search">
                        <select>
                            <option>All</option>
                        </select>
                        <input type="text" className="searchInput" />
                        <SearchIcon className="searchIcon" />
                    </div>

                    <div className="header-nav">
                            <div className="header-option">
                                <span className="header-option1">Hello,</span>
                                <span className="header-option2">Guest</span>
                            </div>

                        <Link to='/signin' className='header-link'>
                            <div className="header-option">
                                <button className='header-option2-signout'>Sign In</button>
                            </div>
                        </Link>

                        <Link to='/checkout' className='header-link'>
                            <div className="header-basket-homepage">
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
        
        return (
            <div>
                <span>
                    {this.props.currentUser ? this.userHomepage() : this.guestHomepage()}
                </span>

                <div className="item-container">
                    {categories && categories.map((category, idx) =>
                        <p key={ idx }>{category}</p>
                    )}
                </div>

                <div className="home">
                    <div className="home-container">
                        <Slider images={bannerImages} />
                    </div>

                    <div>
                        <ItemIndexContainer/>
                    </div>
                </div>

                <footer className='footer'>
                    <div className='back-to-top' onClick={() => window.scrollTo(0, 0)}>
                        Back to top
                    </div>
                    <div className='bottom-footer'>
                        <div className='meet-me'>Meet the Creator
                            <li id='first'>
                                Jenny Nhan  |  
                                <a className='connectlinks' href=''>LinkedIn</a>  |  
                                <a className='connectlinks' href=''>Email</a>  |  
                                <a className='connectlinks' href=''>GitHub</a>
                            </li>
                        </div>
                    </div>
                </footer>  
            </div>
        )
    };
};

export default withRouter(Homepage);