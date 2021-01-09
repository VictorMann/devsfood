import React from 'react';
import { Area } from './styled';

export default ({ page, setPage, totalPages}) => {

    const handleClick = page => {
        setPage(page);
    };

    return (
        <Area>
            {new Array(totalPages).fill(0).map((item, k) =>
                <span 
                    className={page == (k+1) ? 'p-item active' : 'p-item'}
                    onClick={() => handleClick(k + 1)}>
                        
                        {k + 1}
                </span>
            )}
        </Area>
    );
}