import styled from 'styled-components';

export const AreaHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #136713;
padding: 1em;
border-radius: 10px;

.figure-logo {
    width: 200px;

    img {
        max-width: 100%;
    }
}

.search {
    
    input {
        display: inline-block;
        background: rgba(255, 255, 255, .7) url(/images/search.png) no-repeat 12px center;
        background-size: 1.2em;
        width: 3em;
        height: 3em;
        border-radius: 50px;
        border: none;
        outline: none;
        cursor: pointer;

        transition: .2s;

        &:hover {
            background-color: white;
        }
        &:focus,
        &.active {
            cursor: text;
            background-color: white;
            padding-left: 3em;
            padding-right: 1em;
            width: 300px;
        }
    }
}

`;