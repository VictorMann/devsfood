import styled from 'styled-components';

export const Nav = styled.nav.attrs(props => ({className: 'menu'}))`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
a {
    display: inline-block;
    border: 1px solid transparent;
    width: 50px;
    height: 50px;
    padding: .5em;
    margin-bottom: .5em;
    border-radius: 10px;

    transition: border-color .2s;

    &:hover {
        border-color: #0B4D0B;
    }
    &.active {
        background-color: #0B4D0B;
    }
}

.btn-logout {
    cursor: pointer;

    img {
        filter: opacity(.5);
    }
}

img {
    max-width: 100%;
}

`;