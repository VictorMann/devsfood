const initialState = {
    name: '',
    email: '',
    address: {
        address: '',
        city: '',
        uf: ''
    }
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_NAME':
            return {...state, name: action.payload.name};
        
        case 'SET_EMAIL':
            return {...state, email: action.payload.email};
        
        case 'SET_ADDRESS':
            return {...state, address: action.payload.address};
            
        case 'RESET_ADDRESS':
            return {...state, address: initialState.address};
            
        case 'RESET_USER':
            return initialState;
    }

    return state;
};