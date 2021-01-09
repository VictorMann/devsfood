/**
 * Altera o nome do usuário
 * @param {String} name 
 */
export const setName = name => {
    return {
        type: 'SET_NAME',
        payload: { name }
    };
};

/**
 * Altera o email
 * @param {String} email 
 */
export const setEmail = email => {
    return {
        type: 'SET_EMAIL',
        payload: { email }
    };
};

/**
 * Altera o endereço do usuário
 * @param {String} address 
 */
export const setAddress = address => {
    return {
        type: 'SET_ADDRESS',
        payload: { address }
    };
};

/**
 *  Reseta o endereço
 */
export const resetAddress = () => {
    return {
        type: 'RESET_ADDRESS'
    }
};

/**
 *  Reseta usuário
 */
export const resetUser = () => {
    return {
        type: 'RESET_USER'
    };
}