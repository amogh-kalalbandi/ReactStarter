import { ADD_TO_CART } from './actionTypes';
import { REMOVE_FROM_CART } from './actionTypes';
import { POPULATE_PRODUCTS } from './actionTypes';

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
