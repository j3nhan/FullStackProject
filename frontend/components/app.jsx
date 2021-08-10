// import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
// import HomepageContainer from './home/homepage_container';
// import SignupFormContainer from './register/signup_form_container';
// import SigninFormContainer from './register/signin_form_container';

// const App = () => (
    //     <div>
    //         <header>
    
    //         </header>
    
    //         <Switch>
    //             <AuthRoute exact path="/signup" component={SignupFormContainer} />
    //             <AuthRoute exact path="/signin" component={SigninFormContainer} />
    //             <Route exact path="/items/:itemId" component={ItemShowContainer} 
    //             <Route exact path="/" component={HomepageContainer} />
    //         </Switch>
    
    //     </div>
    // );
    
    // export default App;
    
    // ----------------------
import React from 'react';
import { useDispatch } from "react-redux";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./header/Header"
import Homepage from "./home/Homepage"

import Item from './item/Item';
// import ItemShow from './item/Item_show';

function App() {
    let dispatch = useDispatch();

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/">
                        <Header/>
                        <Homepage/>
                        <Item/>
                        {/* <ItemShow/> */}
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default App;
