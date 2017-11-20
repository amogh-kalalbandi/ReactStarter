import { createStore,combineReducers } from 'redux';
import cartReducer from './reducers/cart'

const store = createStore(combineReducers({cartReducer}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;