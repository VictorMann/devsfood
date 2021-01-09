import React from 'react';
import { Area } from './styled';

import { formatMoeda } from '../../helpers';

export default ({ data }) => {
    return (
        <Area>
            <div className="products-list">
                {data.products.map((item, k) => 
                    <div key={k} className="product-item">
                        <div className="product-image">
                            <img src={item.image} />
                        </div>
                        <div className="product-info">
                            <div>{item.name}</div>
                            <div>R$ {formatMoeda(item.price)}</div>
                            <div>qtd.: {item.qt}</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="order-info">
                <div className="or-tot">
                    <div className="or-tit">Total</div>
                    <div className="or-val">R$ {formatMoeda(data.total)}</div>
                </div>
                <div className="or-del">
                    <div className="or-tit">Frete</div>
                    <div className="or-val">R$ {formatMoeda(data.delivery)}</div>
                </div>
                <div className="or-dis">
                    <div className="or-tit">Desconto</div>
                    <div className="or-val">R$ {formatMoeda(data.discount)}</div>
                </div>
            </div>
        </Area>
    );
};