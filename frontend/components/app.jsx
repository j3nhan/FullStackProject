import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupContainer from './signup/Signup_container';
import SigninContainer from './signin/Signin_container';
import Homepage from './home/Homepage'
import ItemShowContainer from './item/Item_show_container'
import ReviewContainer from './item/Review_container'
import CartItemsContainer from './cart_item/Cart_items_container';
import NoPageFound from './No_page_found';
import HeaderContainer from './header/Header_container';
    
const App = () => {
    return (
        <div>
            <HeaderContainer/>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <AuthRoute exact path="/signup" component={SignupContainer} />
                <AuthRoute exact path="/signin" component={SigninContainer} />
                <Route exact path="/items/:itemId" component={ItemShowContainer} />
                <Route exact path="/reviews/create/:itemId" component={ReviewContainer}/>
                <Route exact path='/checkout' component={CartItemsContainer} />
                <Route path="*" component={ NoPageFound } />
            </Switch>
        </div>
    )
};

export default App;
