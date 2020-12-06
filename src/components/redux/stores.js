import {createStore, combineReducers} from 'redux';
import {reducerDish, 
	reducerBought, 
	reducerSubtotal, 
	reducerShowDetails, 
	reducerProductDetails, 
	reducerPriceTopping
} from './reducers.js';


const rootReducer = combineReducers({
    dishs: reducerDish,
    bought: reducerBought,
    subtotal: reducerSubtotal,
    showDetails: reducerShowDetails,
    productDetails: reducerProductDetails,
    priceTopping: reducerPriceTopping
})

const store = createStore(rootReducer);

export default store;