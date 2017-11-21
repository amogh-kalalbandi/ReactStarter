 import { ADD_TO_CART,REMOVE_FROM_CART } from '../actions/actionTypes';

function cartReducer(state = {}, action) {
  switch (action.type) {
  case ADD_TO_CART:
    //debugger;
    if(state.items != undefined )
    {
      //debugger;
      for(var i=0;i<state.items.length;i++)
      {

        if(state.items[i].auto_id == action.data.id) {
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
            productId: action.data.auto_id,
            quantity: 1,
          },
        ]
      }

  case REMOVE_FROM_CART:
    if(state.items != undefined)
    {
      for(var i=0;i<state.items.length;i++)
      {
        if(state.items[i].productId == action.data.auto_id)
        {
          const item = state.items[i];
          item.quantity -=1;
          if(item.quantity !=0)
          {  
                return {
                  ...state,
                  items: [
                  ...state.items
                  ]
                }
          }
          else
          {
            //debugger;
            state.items.splice(i,1)
            return {
              ...state,
              items:[
                ...state.items
              ]
            }
          }
        }
      }
    }
    else
    {
      return {};
    }
  default:
    return state
  }
}


export default cartReducer;