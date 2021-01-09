import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../helpers/authHandler';

export default ({children, ...rest}) => {
    const logged = isLogged();
    const authorized = (rest.private && !logged) ? false : true;

    return (
        authorized
        ? <Route {...rest} render={() => children} />
        : <Redirect to="/login" />
    );
}