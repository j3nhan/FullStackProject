import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, signedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !signedIn ? <Component {...props} /> : <Redirect to='/' />
        }
    />
);

const Protected = ({ component: Component, path, signedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            signedIn ? <Component {...props} /> : <Redirect to='/' />
        }
    />
)

const mapStateToProps = state => (
    { signedIn: Boolean(state.session.id) }
)


export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));