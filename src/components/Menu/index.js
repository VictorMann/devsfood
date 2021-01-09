import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Nav } from './styled';

import { isLogged, doLogout } from '../../helpers/authHandler';

import { resetUser } from '../../actions/UserAction';

export default () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const logged = isLogged();

    const links = [
        {title: 'Store',  icon: "/images/store.png",   link: "/"},
        {title: 'Order',  icon: "/images/order.png",   link: "/orders"},
        {title: 'Profile',icon: "/images/profile.png", link: "/profile"},
    ];

    const handleClickSair = e => {
        e.preventDefault();
        
        doLogout();
        dispatch( resetUser() );
        
        window.location.replace('/');
    };

    return (
        <Nav>
            <ul>
                {links.map((item, k) =>
                    <li key={k}>
                        <Link 
                            data-tip={item.title}
                            data-for="tip-right"
                            to={item.link} 
                            className={item.link == location.pathname ? 'active' : ''}>
                                <img src={item.icon} />
                        </Link>
                    </li>
                )}
                {logged &&
                    <li>
                        <a
                            data-tip={'Sair'}
                            data-for="tip-right"
                            className="btn-logout"
                            onClick={handleClickSair}>
                                <img src="/images/sair.png" />
                        </a>
                    </li>
                }
            </ul>
        </Nav>
    )
};