import Cookie from 'js-cookie';

export const isLogged = () => {
    const token = Cookie.get('token');
    return !!token;
};

export const doLogin = (token, rememberPassword = false) => {
    let timelife = {};
    if (rememberPassword) timelife = { expires: 3600 };
    Cookie.set('token', token, timelife);
};

export const doLogout = () => {
    Cookie.remove('token');
};