import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageArea } from './styled';

import api from '../../helpers/api';
import { doLogin } from '../../helpers/authHandler';

import { 
    setName as setNameUser, 
    setEmail as setEmailUser,
    resetAddress } from '../../actions/UserAction';

import { PageTitle } from '../../components/mainComponents';


function Register() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [disabled, setDisabled] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setDisabled(true);
        api.createUser(name, email, password)
        .then(data => {
            
            if (data.error) {
                alert(data.error);
            } else {

                doLogin(data.result.token);
                dispatch( setNameUser(data.result.data.name) );
                dispatch( setEmailUser(data.result.data.email) );
                dispatch( resetAddress() );
                
                console.log('ok');
                window.location.replace('/');
                return;
            }

            setDisabled(false);
        })
        .catch(err => {
            setDisabled(false);
        });
    };

    return (
        <PageArea>
            <form onSubmit={handleSubmit} action="/" method="GET">
                <PageTitle>Cadastro</PageTitle>
                <div className="form-group">
                    <label>Nome</label>
                    <input 
                        placeholder="Pedro"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        disabled={disabled} />
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="pedro@mail.com"
                        required
                        disabled={disabled} />
                </div>
                <div className="form-group mb-2">
                    <label>Senha</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="* * *"
                        required
                        disabled={disabled} />
                </div>
                <button disabled={disabled}>Criar</button>
                <div className="area-login">
                    <Link to="/login">Voltar para Login</Link>
                </div>
            </form>
        </PageArea>
    );
}

export default Register;