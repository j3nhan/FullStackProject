import React from 'react';
import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignupContainer from './signup/Signup_container';
import SigninContainer from './signin/Signin_container';
import ItemShowContainer from './item/item_show_container'
// import HomepageContainer from './home/homepage_container';

import Header from "./header/Header"
import Homepage from "./home/Homepage"
    
function App() {
    return (
        <div>
            <Switch>
                <AuthRoute exact path="/signup" component={SignupContainer} />
                <AuthRoute exact path="/signin" component={SigninContainer} />
                <Route exact path="/items/:itemId" component={ItemShowContainer} />
                {/* <Route exact path="/" component={HomepageContainer} /> */}

                <Route exact path="/">
                    <Header/>
                    <Homepage/>
                    {/* <Item/> */}
                    {/* <ItemShow/> */}
                </Route>

            </Switch>

            <footer className='footer'>
                <div className='back-to-top' onClick={() => window.scrollTo(0, 0)}>
                    Back to top
                </div>
                <div className='bottom-footer'>
                    <div className='meet-me'>Meet the Creator
                        <li id='first'>
                            Jenny Nhan  |  
                            <a className='connectlinks' href=''>  LinkedIn</a>  |  
                            <a className='connectlinks' href=''>  Email</a>  |  
                            <a className='connectlinks' href=''>  GitHub</a>
                        </li>
                    </div>
                </div>
                <div className='last-footer'>
                    <Link to='/'>
                        <div>
                            <div id='valyou-logo-footer' />
                        </div>
                    </Link>
                </div>
            </footer>  

        </div>
    )
};

export default App;
