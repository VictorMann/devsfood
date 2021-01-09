import React from 'react';
import { useDispatch } from 'react-redux';
import { Area } from './styled';

import { changeCartItem } from '../../actions/CartAction';
import { formatMoeda } from '../../helpers';

export default ({ data }) => {
    const dispatch = useDispatch();

    data = data || {};

    const handleClick = signal => {
        let qt = 1;
        if (signal == '-') qt = -1;
        dispatch(changeCartItem(data.id, qt));
    };

    return (
        <Area>
            <div className="ct-img">
                <img src={data.image} />
            </div>
            <div className="ct-inf">
                <span>{data.name}</span>
                <span>R$ {formatMoeda(data.price)}</span>
            </div>
            <div className="ct-con">
                <span 
                    className="ct-i ct-m"
                    onClick={() => handleClick('-')}></span>
                <span className="ct-qt">{data.qt}</span>
                <span 
                    className="ct-i ct-p"
                    onClick={() => handleClick('+')}></span>
            </div>
        </Area>
    );
};