import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducerDish, 
	reducerBought, 
	reducerSubtotal, 
	reducerShowDetails, 
	reducerProductDetails, 
	reducerPriceTopping,
	reducerOderSuccess,
    reducerMenuActive,
    reducerNumberOder,
    reducerShowModalLogin,
    reducerDataLogin,
    reducerLoginSuccess,
    reducerShowModelRegistration,
    reducerDelivered,
    reducerDataAdminLogin
} from './reducers.js';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    dishs: reducerDish,
    bought: reducerBought,
    subtotal: reducerSubtotal,
    showDetails: reducerShowDetails,
    productDetails: reducerProductDetails,
    priceTopping: reducerPriceTopping,
    oderSuccess: reducerOderSuccess,
    menuActive: reducerMenuActive,
    numberOder: reducerNumberOder,
    showModalLogin: reducerShowModalLogin,
    dataLogin: reducerDataLogin,
    loginSuccess: reducerLoginSuccess,
    modelRegistration: reducerShowModelRegistration,
    delivered: reducerDelivered,
    dataAdminLogin: reducerDataAdminLogin
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;