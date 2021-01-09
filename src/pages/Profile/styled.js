import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
flex-direction: column;
align-items: center;


.mb-2 {
    margin-bottom: 2em !important;
}

& > * {
    width: 550px;
    margin-bottom: 2em;
}

form {
    color: white;
    background: rgb(19, 103, 19);
    border-radius: 10px;
    padding: 1em 2em 2em;

    .form-group {
        margin-bottom: 1em;
    }

    label,
    input,
    button,
    select {
        display: block;
        width: 100%;
    }
    label {
        margin-bottom: .2em;
    }
    button,
    input,
    select {
        padding: 1em;
        border: none;
        border-radius: 8px;
        outline: none;
    }
    button {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1em;
        color: #ffffff;
        background: #00a21c;
        border: 1px solid white;
        cursor: pointer;
        transition: .2s;

        &:hover {
            background: #02ba11;
        }
    }
    .area-login {
        margin-top: .8em;
        text-align: center;

        a {
            color: rgb(255, 255, 255, .7);
            font-size: 0.85em;
            text-decoration: none;
            transition: .2s;

            &:hover {
                color: white;
                text-decoration: underline;
            }
        }
    }
}
.or {
    position: relative;
    text-align: center;
    color: white;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: bold;

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 45%;
        display: block;
        width: 40%;
        height: 1px;
        background: white;
    }
    &::after {
        right: 0;
    }
}
.area-register {
    button {
        display: block;
        width: 100%;
        padding: 1em;
        border: none;
        border-radius: 8px;
        outline: none;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1em;
        color: #ffffff;
        background: #2196f3;
        border: 1px solid white;
        cursor: pointer;
        transition: .2s;

        &:hover {
            background: #00bcd4;
        }
    }
}
`;