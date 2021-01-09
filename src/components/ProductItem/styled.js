import styled from 'styled-components';

export const Area = styled.div`
display: flex;
background-color: white;
border-radius: 5px;
box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
padding: .6em;
color: #136713;
cursor: pointer;

&::after {
    content: '';
    display: block;
    width: 15px;
    background: url(/images/next.png) no-repeat center;
    background-size: contain;
}

.product-img {
    width: 96px;

    img {
        max-width: 100%;
    }
}
.product-info {
    flex: 1;
    margin-left: .7em;

    h5 {
        font-size: .95em;
        margin: 0;
    }
    .product-price {
        font-size: .9em;
    }
    .product-ing {
        font-size: .9em;
        margin: 0;
    }
}
`;