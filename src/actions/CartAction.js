/**
 * Adiciona produto ao carrinho
 * @param {Object} item 
 * @param {Integer} qt 
 */
export const addCart = (item, qt) => {
    return {
        type: 'ADD_PRODUCT',
        payload: { item, qt }
    };
};

/**
 * Altera produto do carrinho
 * @param {String} name 
 */
export const changeCartItem = (id, qt) => {
    return {
        type: 'CHANGE_PRODUCT',
        payload: { id, qt }
    };
};

/**
 * 
 * @param {Object} address 
 */
export const addAddress = (address) => {
    return {
        type: 'ADD_ADDRESS',
        payload: { address }
    }
};

export const reset = () => {
    return {
        type: 'RESET_CART'
    };
};

export const setDelivery = valor => {
    return {
        type: 'SET_DELIVERY',
        payload: { valor }
    };
};