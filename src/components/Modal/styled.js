import styled from 'styled-components';

export const Area = styled.div`
visibility: hidden;
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color: rgba(0, 0, 0, .6);
z-index: 900;

display: flex;
justify-content: center;
align-items: center;

&.active {
    visibility: visible;
}

.modal-content {
    background-color: white;
    min-height: 50px;
    min-width: 250px;
    max-height: 90vh;
    max-width: 70vw;
    border-radius: 5px;
    padding: 1em;
    overflow: auto;
}

`;