import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NavSearchContainer from '../search/nav_search_container';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.userHomepage = this.userHomepage.bind(this);
        this.guestHomepage = this.guestHomepage.bind(this);
        this.signedoutHome = this.signedoutHome.bind(this);
    }
    
    signedoutHome() {
        this.props.signoutUser();
        this.props.history.push('/');
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
                        <NavSearchContainer/>
                    </div>

                    <div className="header-nav">
                        <Link to='/signin' className='header-link'>
                            <div className="header-option">
                                <span className="header-option1">Hello,</span>
                                <span className="header-option2">{this.props.currentUser.name}</span>
                            </div>
                        </Link>

                            <div className="header-option">
                                <button className='header-option2-signout' type='submit' onClick={this.signedoutHome}>Sign Out</button>
                            </div>

                        <Link to='/checkout' className='header-link'>
                            <div className="header-basket-homepage">
                                <ShoppingCartIcon/>
                                <span className="header-option2 basket-count">{Object.values(this.props.cart).length}</span>
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
                        <NavSearchContainer/>
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
                                <span className="header-option2 basket-count">{Object.values(this.props.cart).length}</span>
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    };

    render() {
        const categories = [
            "Recommendation",
            "Farmers Market",
            "Women-Owned",
            "Veteran-Owned",
            "Mom & Pop",
            "Disability-Owned"
        ]

        return (
            <div>
                <span>
                    { this.props.currentUser ? this.userHomepage() : this.guestHomepage() }
                </span>
            
                <div className="item-container">
                    {categories && categories.map((category, idx) =>
                        <p key={ idx }>{category}</p>
                    )}
                </div> 
            </div>
        )
    };
};

export default withRouter(Header);