import { BUY, SELL } from "./const.js";


export const reducer = (state , action) => {
    switch (action.type) {
      case BUY:
        state.item = state.item + 1;
        state.value = state.value + 10
        return localStorage.setItem('store', JSON.stringify(state))
         
      case SELL:
        state.item = state.item - 1;
        state.value = state.value - 10
        return localStorage.setItem('store', JSON.stringify(state))
         
      default:
        return localStorage.setItem('store', JSON.stringify({ item: 0, value: 0, name: "Bankruptcy" })) 
    }
  };