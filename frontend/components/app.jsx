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
//             <Route path="/signup" component={SignupFormContainer} />
//             <Route path="/signin" component={SigninFormContainer} />
//             <Route path="/" component={HomepageContainer} />
//         </Switch>

//     </div>
// );

// export default App;

// ----------------------

import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./header/Header"
import Homepage from "./home/Homepage"

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/">
                        <Header/>
                        <Homepage/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default App;
