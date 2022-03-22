import { BUY, SELL } from "./const.js";
import { store } from "./store.js"

export const reducer = (state = store, action) => {
    switch (action.type) {
      case BUY:
        state.item = state.item + 1;
        state.value = state.value + 10
        return state
        
      case SELL:
        state.item = state.item - 1;
        state.value = state.value - 10
        return state 
  
      default:
        return state 
    }
  };