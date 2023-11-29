'use client';

import { ADD_TO_CART, REMOVE_FROM_CART, INCQTY, DESQTY } from './actionTypes';
let initState = {
  data: [],
};
function cartReducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART: {
      return { ...state, data: [...state.data, payload] };
    }
    case REMOVE_FROM_CART: {
      let newData = state.data.filter((el) => el.id !== payload);

      return { ...state, data: newData };
    }
    case INCQTY: {
      const id = payload;
      console.log(id);
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    }
    case DESQTY: {
      const id = payload;
      console.log(payload);
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        ),
      };
    }
    default:
      return state;
  }
}

export default cartReducer;
