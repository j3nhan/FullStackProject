import React from 'react';
import { Link } from 'react-router-dom';
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


const Header = () => {
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
                    <span className="header-option1">Deliver to </span>
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
                    <Link to='/checkout' className='header-link'>
                        <div className="header-basket">
                            <ShoppingCartIcon/>
                            <span className="header-option2-basket basket-count">{Object.values(this.props.cart).length}</span>
                        </div>
                    </Link>
                </div>
            </nav>

            <div className="item-container">
                {categories && categories.map((category, idx) =>
                    <p key={ idx }>{category}</p>
                )}
            </div>
        </div>
    );
};

export default Header;
