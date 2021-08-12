import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupContainer from './signup/Signup_container';
import SigninContainer from './signin/Signin_container';
import ItemShowContainer from './item/Item_show_container'
import HomepageContainer from './homepage/Homepage_container'
    
function App() {
    return (
        <div>
            <HomepageContainer />
            <Switch>
                <AuthRoute exact path="/signup" component={SignupContainer} />
                <AuthRoute exact path="/signin" component={SigninContainer} />
                <Route exact path="/items/:itemId" component={ItemShowContainer} />
                <Route path="/items" component={} />

                <Redirect to='/' />
            </Switch>

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

export default App;
