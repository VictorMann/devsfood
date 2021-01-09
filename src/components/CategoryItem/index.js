import React from 'react';
import { Area } from './styled';

function CategoryItem({ data, active, setActive }) {

    const handleClick = id => {
        setActive(id);
    };

    return (
        <Area 
            data-tip={data.name}
            data-for="tip-top"
            className={active == data.id ? 'active' : ''}
            onClick={() => handleClick(data.id)}>
                
                <img src={data.image} />
        </Area>
    )
}

export default CategoryItem;