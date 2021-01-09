import styled from 'styled-components';

export const Area = styled.div.attrs(props => ({className: 'pagination'}))`
display: flex;
flex-wrap: wrap;
justify-content: center;

.p-item {
    display: inline-block;
    background: white;
    color: #0b4d0b;
    text-align: center;
    line-height: 2;
    width: 2em;
    height: 2em;
    border-radius: 3px;
    margin: .3em;
    cursor: pointer;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .3);

    &:hover {
        background: #eee;
    }

    &.active {
        background: #80cb86;
        color: white;
    }
}
`;