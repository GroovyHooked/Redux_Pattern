import { BUY, SELL } from "./const.js";

export const reducer = (state, action) => {
    switch (action.type) {
      case BUY:
        state.item = state.item + 1;
        return state
        
      case SELL:
        state.item = state.item - 1;
        return state = state
  
      default:
        return state = state
    }
  };