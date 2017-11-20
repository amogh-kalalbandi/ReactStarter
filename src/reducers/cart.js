 import { ADD_TO_CART } from '../actions/actionTypes';

function cartReducer(state = {}, action) {
  switch (action.type) {
  case ADD_TO_CART:
    return {
      ...state,
      items: [
        ...(state.items || []),
        {
          productId: action.data.id,
          quantity: 1,
        },
      ]
    }
  default:
    return state
  }
}


export default cartReducer;