import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../../actions/CartAction';
import { Area } from './styled';

import { formatMoeda } from '../../helpers';

export default ({ data, setActive }) => {
    const dispatch = useDispatch();
    const [qt, setQt] = useState(1);

    data = data instanceof Object ? data : {};
    

    const handleClickControl = (signal) => {
        if (signal === '-') setQt(qt > 1 ? qt - 1 : 1);
        else setQt(qt + 1);
    };

    const handleAddToCart = () => {
        dispatch(addCart(data, qt));
        setActive(false);
    };

    useEffect(() => setQt(1), [data]);

    return (
        <Area>
            <div className="mp-info">
                <div className="mp-fig">
                    <img src={data.image} />
                </div>
                <div className="mp-details">
                    <div className="mp-desc">
                        <h5>{data.name}</h5>
                        <span>{data.ingredients}</span>
                    </div>
                    <div className="mp-control">
                        <div className="mp-qtd">
                            <span onClick={() => handleClickControl('-')}>
                                <img src="/images/minus.png" />
                            </span>
                            <span>{qt}</span>
                            <span onClick={() => handleClickControl('+')}>
                                <img src="/images/plus.png" />
                            </span>
                        </div>
                        <div className="mp-price">R$ {formatMoeda(data.price * qt)}</div>
                    </div>
                </div>
            </div>
            <div className="mp-btns">
                <button className="small mclose">Cancelar</button>
                <button 
                    className="big"
                    onClick={handleAddToCart}>
                        Adicionar ao carrinho
                </button>
            </div>
        </Area>
    );
};