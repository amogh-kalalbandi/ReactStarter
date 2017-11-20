 import { ADD_TO_CART } from '../actions/actionTypes';

function cartReducer(state = {}, action) {
  switch (action.type) {
  case ADD_TO_CART:
    //debugger;
    if(state.items != undefined )
    {
      //debugger;
      for(var i=0;i<state.items.length;i++)
      {
        if(state.items[i].productId == action.data.id) {
          const item = state.items[i];
          item.quantity +=1;

          return {
            ...state,
            items: [
              ...state.items
            ]
          }
        }
      }
    }
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