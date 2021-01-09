import styled from 'styled-components';

export const AreaCart = styled.div`
position: fixed;
bottom: 0;
right: 20px;
width: 250px;
color: white;
background-color: #136713;
font-size: .9em;
box-shadow: 0 0 3px rgba(255, 255, 255, .3);

border-top-left-radius: 10px;
border-top-right-radius: 10px;


.cart-header {
    padding: 1em;
    border-bottom: 1px solid #267429;
    cursor: pointer;

    & > * {
        display: inline-block;
        margin-right: .5em;
    }
    .icon-down,
    .icon-cart {
        width: 1em;
        height: 1em;
        background: url(/images/cart.png) no-repeat center;
        background-size: contain;
        vertical-align: top;
    }
    .icon-down {
        background-image: url(/images/down.png);
        float: right;
    }
}
.cart-body {
    max-height: 0;
    min-height: 0;
    opacity: 0;
    transition: .3s;

    &.active {
        max-height: 95vh;
        min-height: 200px;
        opacity: 1;
        padding: .5em;
    }

    .cart-list {
        margin-bottom: 1em;
    }

    .delivery-area {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 1em;

        h5 {
            width: 100%;
            margin: 0;
            margin-bottom: .8em;
        }

        .del-info {
            flex: 1;
            font-size: .85em;

            span {
                display: block;
            }
        }
        .del-i {
            display: inline-block;
            width: 1.2em;
            height: 1.2em;
            background: url(/images/edit.png) no-repeat center;
            background-size: contain;
            cursor: pointer;
        }
    }
    .coupon-area {
        margin-bottom: 1em;

        h5 {
            margin: 0;
            margin-bottom: .5em;
            font-size: 1em;
        }
        input {
            border: none;
            border-radius: 5px;
            outline: none;
            padding: .4em;
            width: 100%;
        }
    }
    .totals-area {
        margin-bottom: 1em;

        table {
            width: 100%;
            border-collapse: collapse;
            font-weight: bold;
            font-size: .9em;
            border: none;

            td {
                padding: .4em 0;
            }
            td:first-child {
                text-align: left;
            }
            td:last-child {
                text-align: right;
            }
        }
    }

    .btn-finish {
        display: inline-block;
        border: none;
        width: 100%;
        border-radius: 100px;
        background: rgb(11, 77, 11);
        font-size: .9em;
        font-weight: bold;
        color: white;
        text-transform: uppercase;
        padding: .7em;
        margin-bottom: .5em;
        cursor: pointer;

        transition: .2s;

        &:hover {
            color: yellow;
            box-shadow: 0 0 3px 4px rgba(255, 255, 255, .2);
        }
    }
}
`;
