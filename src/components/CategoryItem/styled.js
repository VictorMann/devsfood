import styled from 'styled-components';

export const Area = styled.div.attrs(attrs => ({className: 'category-item'}))`
width: 65px;
height: 65px;
padding: .75em;
background-color: rgba(255 ,255, 255, .5);
border-radius: 10px;
cursor: pointer;

transition: .2s;

&:hover {
    background-color: rgba(255 ,255, 255, .8);
}

&.active {
    background-color: #00ff0a;
}

img {
    max-width: 100%;
}
`;