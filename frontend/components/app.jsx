import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupContainer from './signup/signup_container';
import SigninContainer from './signin/signin_container';
import Homepage from './home/homepage';
import ItemShowContainer from './item/item_show_container'
import ReviewContainer from './item/review_container'
import CartItemsContainer from './cart_item/cart_items_container';
import NoPageFound from './no_page_found';
import HeaderContainer from './header/header_container';
import ItemsSearchContainer from './search/items_search_container'
import CompleteCart from './cart_item/complete_cart';
    
const App = () => {
    return (
        <div>
            <HeaderContainer/>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/search" component={ItemsSearchContainer} />
                <AuthRoute exact path="/signup" component={SignupContainer} />
                <AuthRoute exact path="/signin" component={SigninContainer} />
                <Route exact path="/items/:itemId" component={ItemShowContainer} />
                <Route exact path="/reviews/create/:itemId" component={ReviewContainer}/>
                <Route exact path='/checkout' component={CartItemsContainer} />
                <Route exact path='/thankyou' component={CompleteCart} />
                <Route path="*" component={ NoPageFound } />
            </Switch>
        </div>
    )
};

export default App;
