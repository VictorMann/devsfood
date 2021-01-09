import styled from 'styled-components';

export const Area = styled.div`
display: flex;
font-size: .85em;
margin-bottom: .5em;

.ct-img {
    flex: 1;
    img {
        max-width: 100%;
        border-radius: 5px;
    }
}
.ct-inf {
    flex: 2;
    padding-left: .4em;

    span {
        display: block;

        &:first-child {
            font-weight: bold;
            margin-bottom: .2em;
        }
        &:last-child {

        }
    }
}
.ct-con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    span {
        display: inline-block;
    }
    .ct-i {
        width: 1em;
        height: 1em;
        background: no-repeat center;
        background-size: contain;
        cursor: pointer;

        &.ct-m {
            background-image: url(/images/minus.png);
        }
        &.ct-p {
            background-image: url(/images/plus.png);
        }
    }
    .ct-qt {
        font-size: 1em;
    }
}

`;