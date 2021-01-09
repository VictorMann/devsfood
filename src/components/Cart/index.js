import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AreaCart } from './styled';

import { formatMoeda } from '../../helpers';
import CartItem from '../CartItem';

import { isLogged } from '../../helpers/authHandler';

import { 
    addAddress, 
    reset as resetCart,
    setDelivery } from '../../actions/CartAction';

import api from '../../helpers/api';

let ultPeso = 0;

export default () => {
    let logged = isLogged();
    const dispatch = useDispatch();

    const history = useHistory();
    const cart = useSelector(state => state.cart);
    const address = useSelector(state => state.user.address);
    const [open, setOpen] = useState(false);

    const [opacityDelivery, setOpacityDelivery] = useState(1);

    let qt = cart.products.length 
    ? cart.products.reduce((tot, item) => tot + item.qt, 0)
    : 0;

    let totalPriceProducts = cart.products.length
    ? cart.products.reduce((tot, item) => tot + (item.qt * item.price), 0)
    : 0;

    useEffect(() => {

        if (logged && address.cep && cart.products.length > 0) {

            let peso = cart.products.reduce((tot, item) => tot + (item.qt * item.weight), 0);

            if (peso != ultPeso) {

                setOpacityDelivery(.3);
                ultPeso = peso;

                api.getFrete(address.cep, peso)
                .then(res => {
                    if (res.error) {
                        alert(res);
                    } else {
                        dispatch( setDelivery(res.result.preco) );
                        console.log(res);
                    }

                    setOpacityDelivery(1);
                })
                .catch(err => {
                    alert(err);
                    console.error(err);
                    setOpacityDelivery(1);
                });
            }
        } else {
            ultPeso = 0;
        }

        console.log(new Date());

    }, [cart]);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickEditAddress = () => {
        setOpen(false);
        history.push('/profile#address');
    };

    const handleClickCheckout = () => {
        setOpen(false);

        if (logged && address.uf) {

            dispatch( addAddress(address) );
            cart.address = address;
            cart.total = totalPriceProducts + cart.delivery - cart.discount;
            api.addOrders(cart)
            .then(res => {
                if (res.error) {
                    alert('ERROR: ' + JSON.stringify(res));
                    console.log(res);
                } else {
                    dispatch( resetCart() );
                    window.location = '/orders';
                }
            });
        } else {

            history.push('/profile');
        }
    };

    return (
        <AreaCart>
            <div 
                className="cart-header"
                onClick={handleClick}>
                    <span className="icon-cart"></span>
                    <span>Meu carrinho</span>
                    <span>({qt})</span>
                    {open && <span className="icon-down"></span>}
            </div>
            <div className={open ? 'cart-body active' : 'cart-body'}>
                {cart.products.length > 0 &&
                    <div className="cart-list">
                            {cart.products.map((item, k) =>
                                <CartItem key={k} data={item} />
                            )}
                    </div>
                }
                <div className="delivery-area">
                    <h5>Entrega</h5>
                    <div className="del-info">
                        {logged && address.uf
                            ?
                                <>
                                    <span>Minha Casa</span>
                                    <span>{address.address}</span>
                                    <span>{address.city}, {address.uf}</span>
                                    <span>CEP {address.cep}</span>
                                </>
                            :
                                <span style={{fontStyle: 'italic'}}>
                                    {!logged
                                        ? 'Necessário login'
                                        : 'Cadastre um endereço p/ entrega'}
                                </span>
                        }
                    </div>
                    <span 
                        className="del-i"
                        onClick={handleClickEditAddress}></span>
                </div>
                <div className="coupon-area">
                    <h5>Cupom de desconto</h5>
                    <input />
                </div>
                <div className="totals-area">
                    <table style={{opacity: opacityDelivery}}>
                        <tr>
                            <td>Desconto</td>
                            <td>R$ {formatMoeda(cart.discount)}</td>
                        </tr>
                        {logged && cart.products.length > 0 && address.cep
                            ?
                                <>
                                    <tr>
                                        <td>Taxa de entrega</td>
                                        <td>R$ {formatMoeda(cart.delivery)}</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>R$ {formatMoeda( totalPriceProducts + cart.delivery - cart.discount )}</td>
                                    </tr>
                                </>
                            :
                                <>
                                    <tr>
                                        <td>Taxa de entrega</td>
                                        <td>R$ 0,00</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>R$ {formatMoeda(totalPriceProducts - cart.discount)}</td>
                                    </tr>
                                </>
                        }
                        
                    </table>
                </div>
                {cart.products.length > 0 && 
                    <button 
                        className="btn-finish"
                        onClick={handleClickCheckout}>Finalizar compra</button>
                }
            </div>
        </AreaCart>
    );
}