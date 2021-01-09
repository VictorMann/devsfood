import React, { useRef } from 'react';
import { AreaHeader } from './styled';

export default ({ search, setSearch }) => {
    const handleFocus = e => {
        e.target.setAttribute('placeholder', 'Buscar');
    };
    const handleBlur = e => {
        e.target.removeAttribute('placeholder');
    };

    return (
        <AreaHeader>
            <div className="figure-logo">
                <img src="/images/logo.png" />
            </div>
            <form className="search">
                <input 
                    type="search"
                    className={search ? 'active' : ''}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={e => setSearch(e.target.value)}
                    value={search} />
            </form>
        </AreaHeader>
    );
}