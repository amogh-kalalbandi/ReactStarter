import { ADD_TO_CART } from './actionTypes';
import { REMOVE_FROM_CART } from './actionTypes';
import { POPULATE_PRODUCTS,INITIAL_CART_ADDITION } from './actionTypes';

export const addToCart = (product) => ({
	type: ADD_TO_CART,
	data: product
});

export const removeFromCart = (product) => ({
	type: REMOVE_FROM_CART,
	data: product
});

export const populateProducts = (products) => ({
	type: POPULATE_PRODUCTS,
	data: products
});

export const initialCartAddition = (cart_items) => ({
	type: INITIAL_CART_ADDITION,
	data: cart_items
});