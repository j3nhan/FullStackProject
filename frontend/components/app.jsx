import React from 'react';
import { Route, Switch, Link, Redirect, HashRouter } from 'react-router-dom';
import HomepageContainer from './home/homepage_container';
import SignupFormContainer from './register/signup_form_container';
import SigninFormContainer from './register/signin_form_container';

const App = () => (
    <div>
        <header>
            
        </header>

        <Switch>
            <Route path="/signup" component={SignupFormContainer} />
            <Route path="/signin" component={SigninFormContainer} />
            <Route path="/" component={HomepageContainer} />
        </Switch>

    </div>
);

export default App;