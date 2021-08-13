import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupContainer from './signup/signup_container';
import SigninContainer from './signin/signin_container';
import ItemShowContainer from './item/item_show_container'
import HomepageContainer from './home/homepage_container'
import NoPageFound from './No_page_found';
    
function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomepageContainer} />
                <AuthRoute exact path="/signup" component={SignupContainer} />
                <AuthRoute exact path="/signin" component={SigninContainer} />
                <Route exact path="/items/:itemId" component={ItemShowContainer} />
                <Route path="*" component={NoPageFound} />
            </Switch>
        </div>
    )
};

export default App;
