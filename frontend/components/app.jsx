import React from 'react';
import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignupContainer from '../signup/Signup_container';
import SigninContainer from './signin/Signin_container';
// import HomepageContainer from './home/homepage_container';

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
    
    import Header from "./header/Header"
    import Homepage from "./home/Homepage"
    
    
    // import ItemShowContainer from './item/item_show_container'
    
    function App() {
    return (
            <div>
                <Switch>
                    <AuthRoute exact path="/signup" component={SignupContainer} />
                    <AuthRoute exact path="/signin" component={SigninContainer} />
                    <Route exact path="/items/:itemId" component={ItemShowContainer} />


                    <Route exact path="/">
                        <Header/>
                        <Homepage/>
                        {/* <Item/> */}
                        {/* <ItemShow/> */}
                    </Route>

                </Switch>
            </div>
    )
}
export default App;
