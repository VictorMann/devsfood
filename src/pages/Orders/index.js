import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';

import api from '../../helpers/api';

import { PageTitle } from '../../components/mainComponents';
import OrderItem from '../../components/OrderItem';


function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        api.getOrders()
        .then(res => {
            if (res.error) alert(res.error);
            else if (res.status) alert(res.status);
            else {
                setOrders(res.result);
            }
        })
    }, []);

    return (
        <PageArea>
            <PageTitle>Pedidos</PageTitle>
            <div className="order-list">
                {orders.length > 0 && 
                    orders.map((item, k) =>
                        <OrderItem key={k} data={item} />
                    )
                }
            </div>
        </PageArea>
    )
}

export default Orders;