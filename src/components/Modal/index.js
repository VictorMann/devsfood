import React from 'react';
import { Area } from './styled';

export default ({ children, active, setActive }) => {

    const handleClose = e => {
        e.target.classList.contains('mclose') &&
            setActive(false);
    };

    return (
        <Area
            className={active ? 'modal mclose active' : 'modal mclose'}
            onClick={handleClose}>

                <div className="modal-content">
                    {children}
                </div>
        </Area>
    );
};