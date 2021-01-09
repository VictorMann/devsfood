import { combineReducers } from 'redux';
import User from './UserReducer';
import Cart from './CartReducer';

export default combineReducers({
    user: User,
    cart: Cart
});