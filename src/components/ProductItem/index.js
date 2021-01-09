import React from 'react';
import { Area } from './styled';

import { formatMoeda } from '../../helpers';

export default ({ data, attrs }) => {
    return (
        <Area {...attrs}>
            <div className="product-img">
                <img src={data.image} />
            </div>
            <div className="product-info">
                <h5>{data.name}</h5>
                <span className="product-price">R$ {formatMoeda(data.price)}</span>
                <p className="product-ing">{data.ingredients}</p>
            </div>
        </Area>
    );
};

