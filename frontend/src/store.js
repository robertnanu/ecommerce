import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
});  // Ensure you have your reducers here

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== 'production',  // Automatically uses Redux DevTools if not in production
});

export default store;
