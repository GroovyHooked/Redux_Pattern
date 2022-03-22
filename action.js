import { state } from "./store.js";
import { BUY, SELL } from "./const.js";
import { reducer } from "./reducer.js";

const dataDisplay = document.querySelector("#state");

export const buyItem = () => {
  const action = { type: BUY };
  reducer(state, action);
  console.log(state);
  dataDisplay.innerHTML = state.item;
  return state;
};

export const sellItem = () => {
  const action = { type: SELL };
  reducer(state, action);
  console.log(state);
  dataDisplay.innerHTML = state.item;
  return state;
};
