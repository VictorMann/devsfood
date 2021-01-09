import styled from 'styled-components';

export const Area = styled.div`
width: 500px;
color: rgb(11, 77, 11);

.mp-info {
    display: flex;
    margin-bottom: 1em;

    .mp-fig {
        width: 50%;
        margin-right: 1em;
        img {
            max-width: 100%;
            border-radius: 10px;
        }
    }
    .mp-details {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .mp-desc {

            & > * {
                display: block;
                margin: 0;
            }

            h5 {
                font-size: 1.5em;
                margin-bottom: .5em;
            }
            span {
                font-size: .85em;
            }
        }
        .mp-control {
            display: flex;
            justify-content: space-between;

            & * {
                outline: none;
            }

            .mp-qtd {
                text-align: center;

                span {
                    display: inline-block;

                    img {
                        max-width: 100%;
                    }

                    &:first-child,
                    &:last-child {
                        width: 1.5em;
                        height: 1.5em;
                        padding: .3em;
                        background: red;
                        border-radius: 2em;
                        background: #4da44d;
                        box-shadow: 1px 1px 3px rgba(0, 0, 0, .5);
                        cursor: pointer;

                        &:active {
                            background: rgb(0, 255, 10);
                        }
                    }
                    &:nth-child(2) {
                        font-size: 1.5em;
                        margin: 0 .6em;
                    }
                }
            }
            .mp-price {
                font-size: 1.5em;
            }
        }
            
    }
}
.mp-btns {
    text-align: right;

    button {
        color: white;
        background: rgb(11, 77, 11);
        padding: .8em 1.3em;
        border: none;
        border-radius: 4px;
        margin-left: 1em;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
        cursor: pointer;

        &.small {
            font-size: .85em;
            padding: .5em 1em;
            vertical-align: bottom;
        }
        &.big {
            font-size: 1.1em;
        }
    }
}
`;