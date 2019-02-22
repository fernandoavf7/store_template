import { combineReducers } from "redux";
import { SIDEBAR_STATE, MODAL_FILTER_STATE, STORES_LIST, PRODUCTS_LIST } from './../constants/constants_reducer';


const modal_function = (state = false, action) => {
    switch (action.type) {
        case MODAL_FILTER_STATE:
            return action.modal;
        default:
            return state;
    }
}

const sidebar_function = (state = false, action) => {
    switch (action.type) {
        case SIDEBAR_STATE:
            return action.sidebar;
        default:
            return state;
    }
}

const stores_function = (state = [], action) => {
    switch (action.type) {
        case STORES_LIST:
            return action.args;
        default:
            return state;
    }
}

const products_function = (state = [], action) => {
    switch (action.type) {
        case PRODUCTS_LIST:
            return action.args;
        default:
            return state;
    }
}

// main reducers
export const reducers = combineReducers({
    module_modal: modal_function,
    module_sidebar: sidebar_function,
    module_stores: stores_function,
    module_products: products_function
});
