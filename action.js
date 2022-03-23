import { reducer } from "./reducer.js";
import { dataDisplay1, dataDisplay2, store } from "./index.js";

export const buyItem = (action) => {
  reducer(store, action);
  dataDisplay1.innerHTML = store.item;
  dataDisplay2.innerHTML = store.value;
};

export const sellItem = (action) => {
  reducer(store, action);
  dataDisplay1.innerHTML = store.item;
  dataDisplay2.innerHTML = store.value;
};
