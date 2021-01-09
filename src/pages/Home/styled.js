import styled from 'styled-components';

export const PageArea = styled.div`

.category-area {
    margin-bottom: 2em;

    h4 {
        color: white;
        font-weight: normal;
    }

    .category-list {
        display: flex;
    
        .category-item {
            margin-right: .5em;
        }
    }
}
.product-area {
    margin-bottom: 2em;
    
    .product-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
    }
}
`;