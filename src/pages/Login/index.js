import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageArea } from './styled';

import { PageTitle } from '../../components/mainComponents';

import api from '../../helpers/api';
import { doLogin } from '../../helpers/authHandler';

import { 
    setName as setNameUser, 
    setEmail as setEmailUser,
    setAddress,
    resetAddress } from '../../actions/UserAction';


function Login() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [disabled, setDisabled] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setDisabled(true);

        api.login(email, password)
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {

                doLogin(data.result.token);
                dispatch(setNameUser(data.result.data.name));
                dispatch(setEmailUser(data.result.data.email));

                if (data.result.data.address) {
                    dispatch(setAddress(data.result.data.address));
                } else {
                    dispatch( resetAddress() );
                }
                
                console.log('ok');
                window.location.replace('/');
                return ;
            }

            setDisabled(false);
        })
        .catch(err => {
            console.error(err);
            setDisabled(false);
        });
    };

    return (
        <PageArea>
            <form onSubmit={handleSubmit}>
                <PageTitle>Login</PageTitle>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={disabled}
                        required />
                </div>
                <div className="form-group mb-2">
                    <label>Senha</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        disabled={disabled}
                        required />
                </div>
                <button disabled={disabled}>Entrar</button>
            </form>
            <div className="or">ou</div>
            <div className="area-register">
                <Link className="btn-register" to="/register">Registre-se</Link>
            </div>
        </PageArea>
    );
}

export default Login;