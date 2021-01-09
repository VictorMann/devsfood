const initialState = {
    products: [],
    address: {},
    discount: 0,
    delivery: 0
};

export default (state = initialState, action) => {
    if (action.type == 'ADD_PRODUCT') {

        let id = action.payload.item.id;
        let products = [...state.products];
        let index = products.findIndex(item => item.id == id);
        if (index > -1) {
            products[index].qt += action.payload.qt;
        } else {
            products.push({
                ...action.payload.item,
                qt: action.payload.qt
            });
        }
        return {...state, products};

    } else if (action.type == 'CHANGE_PRODUCT') {

        let id = action.payload.id;
        let products = [...state.products];
        let index = products.findIndex(item => item.id == id);
        if (index > -1) {
            products[index].qt += action.payload.qt;
            if (products[index].qt < 1) products.splice(index, 1);
            return {...state, products};
        }

    } else if (action.type == 'ADD_ADDRESS') {
        return {...state, address: action.payload.address};
    
    } else if (action.type == 'SET_DELIVERY') {
        return {...state, delivery: action.payload.valor};

    } else if (action.type == 'RESET_CART') {
        return initialState;
    
    }

    return state;
};