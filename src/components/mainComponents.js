import styled from 'styled-components';

export const Template = styled.div`
height: 100vh;
display: flex;

.menu {
    width: 80px;
    background-color: #136713;
}
.body {
    flex: 1;
    background: #7cbb2f url(/images/bg.png);
    background-size: 125px;
    padding: 2em;
    overflow-y: auto;
}
`;

export const PageTitle = styled.h1``;