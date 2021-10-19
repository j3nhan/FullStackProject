import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NavSearchContainer from '../search/nav_search_container';
import { HashLink } from 'react-router-hash-link';

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
        let cartQty = 0;
        if (this.props.currentUser && this.props.cart.length > 0) {
            this.props.cart.forEach(cartItem => {
                    cartQty += cartItem.quantity
            }); 
        }

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
                                <span className="header-option2 basket-count">{cartQty}</span>
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
                                <span className="header-option2 basket-count"></span>
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    };

    render() {
        return (
            <div>
                <span>
                    { this.props.currentUser ? this.userHomepage() : this.guestHomepage() }
                </span>

                <div className="header-cat-container">
                    <div className="header-cat" >Recommendation</div>
                    <HashLink className="header-cat" smooth to='/#fm'>Farmers Market</HashLink>
                    <HashLink className="header-cat" smooth to='/#wo'>Women-Owned</HashLink>
                    <HashLink className="header-cat" smooth to='/#vo'>Veteran-Owned</HashLink>
                    <HashLink className="header-cat" smooth to='/#mp'>Mom & Pop</HashLink>
                    <HashLink className="header-cat" smooth to='/#do' > Disability-Owned </HashLink>
                </div>

            </div>
        )
    };
};

export default withRouter(Header);