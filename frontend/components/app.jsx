import React from 'react';
// import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
// import HomepageContainer from './home/homepage_container';
// import SignupFormContainer from './register/signup_form_container';
// import SigninFormContainer from './register/signin_form_container';

// const App = () => (
//     <div>
//         <header>
            
//         </header>

//         <Switch>
//             <Route exact path="/signup" component={SignupFormContainer} />
//             <Route exact path="/signin" component={SigninFormContainer} />
//             <Route exact path="/items/:itemId" component={ItemShowContainer} 
//             <Route exact path="/" component={HomepageContainer} />
//         </Switch>

//     </div>
// );

// export default App;

// ----------------------

import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./header/Header"
import Homepage from "./home/Homepage"
import Item from "./item/Item"

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/">
                        <Header/>
                        <Homepage/>
                        <Item />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default App;
