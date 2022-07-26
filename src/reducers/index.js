import { combineReducers } from "redux";
import user from './authReducer.js';
import restaurants from './restaurantsReducer.js';
import items from './itemReducer.js';
import orders from './ordersReducer.js';
import cart from './cartReducer.js';
import flash from './flashMessageReducer.js';
import selectedItem from './selectedItemReducer.js';
import payments from './paymentReducer.js';

export default combineReducers({
    user,
    restaurants,
    items,
    orders,
    cart,
    flash,
    selectedItem,
    payments
});