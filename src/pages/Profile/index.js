import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageArea } from './styled';

import api from '../../helpers/api';

import { 
    setName as setNameUser, 
    setEmail as setEmailUser,
    setAddress as setAddressUser
} from '../../actions/UserAction';

import { PageTitle } from '../../components/mainComponents';


function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [address, setAddress] = useState(user.address.address);
    const [city, setCity] = useState(user.address.city);
    const [uf, setUf] = useState(user.address.uf);
    const [cep, setCep] = useState(user.address.cep);

    const [disabled, setDisabled] = useState(false);

    const handleSubmitPerfil = e => {
        e.preventDefault();

        if (password != confirmPassword) {
            alert('Senhas não batem');
            return ;
        }

        setDisabled(true);

        api.updateUser({name, email, password})
        .then(res => {
            
            if (res.error) {
                alert(res.error);
            } else {

                dispatch(setNameUser(name));
                dispatch(setEmailUser(email));
                
                console.log('ok');
            }

            setDisabled(false);
        })
        .catch(err => {
            setDisabled(false);
        });
    };

    const handleSubmitAddress = e => {
        e.preventDefault();

        setDisabled(true);

        let data = {address, city, uf, cep};
        api.createAddress(data)
        .then(res => {
            
            if (res.error) {
                alert(res.error);
            } else {

                dispatch(setAddressUser(data));

                console.log('ok');
            }

            setDisabled(false);
        })
        .catch(err => {
            setDisabled(false);
        });
    };

    return (
        <PageArea>
            <form onSubmit={handleSubmitPerfil}>
                <PageTitle>Perfil</PageTitle>
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
                <div className="form-group ">
                    <label>Nova Senha</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="* * *"
                        disabled={disabled} />
                </div>
                <div className="form-group mb-2">
                    <label>Confirmar Senha</label>
                    <input 
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        placeholder="* * *"
                        required
                        disabled={disabled || !password} />
                </div>
                <button disabled={disabled}>Salvar</button>
            </form>





            <form id="address" onSubmit={handleSubmitAddress}>
                <PageTitle>Endereço</PageTitle>
                <div className="form-group">
                    <label>Endereço com Número</label>
                    <input 
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        placeholder="Rua Cardoso, 12"
                        required
                        disabled={disabled} />
                </div>
                <div className="form-group ">
                    <label>Cidade</label>
                    <input 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        placeholder="Guarulhos"
                        disabled={disabled}
                        required />
                </div>
                <div className="form-group">
                    <label>Estado</label>
                    <select 
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        required>
                        <option value=""></option>
                        <option value="SP">SP</option>
                        <option value="RJ">RJ</option>
                        <option value="MT">MT</option>
                    </select>
                </div>
                <div className="form-group mb-2">
                    <label>CEP</label>
                    <input 
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                        disabled={disabled}
                        required />
                </div>
                <button disabled={disabled}>Salvar</button>
            </form>
        </PageArea>
    );
}

export default Profile;