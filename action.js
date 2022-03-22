import { store } from "./store.js";
import { reducer } from "./reducer.js";
import { dataDisplay1, dataDisplay2 } from "./index.js"


export const buyItem = (action) => {
  reducer(store, action);
  console.log(store);
  dataDisplay1.innerHTML = store.item;
  dataDisplay2.innerHTML = store.value;
  return store;
};

export const sellItem = (action) => {
  reducer(store, action);
  console.log(store);
  dataDisplay1.innerHTML = store.item;
  dataDisplay2.innerHTML = store.value;
  return store;
};
