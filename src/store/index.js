import {createStore, combineReducers} from 'redux';

//enables redux dev tools in chrome console
import {composeWithDevTools} from 'redux-devtools-extension';

import categories from './categoryReducer';
import products from './productReducer';
import simpleCart from './simpleCartReducer'

//combine reducers
let reducers = combineReducers({categories, products, simpleCart});

//create the actual store
const store = ()=>{
  return createStore(reducers, composeWithDevTools());
}

export default store();