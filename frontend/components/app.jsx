import React from 'react';
import HomepageContainer from './home/homepage_container';
import { Route, Switch, Link } from 'react-router-dom';
import SignupFormContainer from './register/signup_form_container';
import SigninFormContainer from './register/signin_form_container';

const App = () => (
    <div>
        <header>
            <h1>ValYOU Homepage</h1>
            <HomepageContainer />
        </header>

        <Switch>
            <Route path="/signup" component={SignupFormContainer} />
            <Route path="/signin" component={SigninFormContainer} />
        </Switch>
        
    </div>
);

export default App;