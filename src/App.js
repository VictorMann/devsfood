import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import ReactTooltip from 'react-tooltip';

import { Template } from './components/mainComponents';
import Menu from './components/Menu';
import Cart from './components/Cart';

export default () => {
    return (
        <BrowserRouter>
            <Template>
                <Menu />
                <div className="body">
                    <Routes />
                </div>
                <Cart />
                <ReactTooltip id="tip-top" place="top" effect="solid" />
                <ReactTooltip id="tip-right" place="right" effect="solid" />
            </Template>
        </BrowserRouter>
    );
}