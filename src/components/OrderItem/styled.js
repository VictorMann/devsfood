import styled from 'styled-components';

export const Area = styled.div`
display: flex;
border-radius: 10px;
border: 2px solid rgb(11, 77, 11);
margin-bottom: 1em;
overflow: hidden;


.products-list {
    flex: 1;
    padding: 1em;
    background: rgba(11, 77, 11, .25);

    .product-item {
        display: flex;
        

        .product-image {
            width: 80px;
            img {
                max-width: 100%;
                border-radius: 5px;
            }
        }
        .product-info {
            margin-left: 1em;
            color: white;
            font-size: .9em;
            line-height: 1.3;
        }
    }
}
.order-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 140px;
    background: rgb(11, 77, 11);
    color: rgba(255, 255, 255, .8);
    padding: .5em;
    font-size: .85em;

    & > * {
        margin-bottom: .7em;
    }

    .or-tot {
        color: white;
        .or-val {
            font-size: 1.3em;
        }
    }

    .or-dis {
        margin-bottom: 0;
    }
}
`;