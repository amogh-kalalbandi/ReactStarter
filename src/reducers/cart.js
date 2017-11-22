 import { ADD_TO_CART,REMOVE_FROM_CART,INITIAL_CART_ADDITION } from '../actions/actionTypes';
 import axios from 'axios';

function cartReducer(state = {}, action) {
  switch (action.type) {
  case INITIAL_CART_ADDITION:
     var cart_items = action.data
    const arr = []
    for(var i=0;i<cart_items.length;i++)
    {
      arr.push({productId:cart_items[i].id,quantity:cart_items[i].order_count})
    }
    //debugger;
    return ({
      ...state,
      items:arr
      });


  case ADD_TO_CART:
    //debugger;
    axios.post('http://127.0.0.1:8000/OrderCount/', {
    auto_id: action.data.auto_id,
    order_count:1
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    if(state.items != undefined )
    {
      //debugger;
      for(var i=0;i<state.items.length;i++)
      {

        if(state.items[i].productId == action.data.auto_id) {
          //debugger;
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
            quantity: action.data.order_count,
          },
        ]
      }

  case REMOVE_FROM_CART:
  axios.post('http://127.0.0.1:8000/OrderCount/', {
    auto_id: action.data.auto_id,
    order_count:-1
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
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