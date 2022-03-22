import { store } from "./store.js";
import { buyItem, sellItem } from "./action.js";
import { BUY, SELL } from "./const.js";


export const dataDisplay1 = document.querySelector("#state-item");
export const dataDisplay2 = document.querySelector("#state-value");

dataDisplay1.innerHTML = store.item;
dataDisplay2.innerHTML = store.value;

const button1 = document.querySelector("#buy");
const button2 = document.querySelector("#sell");

button1.addEventListener("click", () => buyItem({ type: BUY }));
button2.addEventListener("click", () => sellItem({ type: SELL }));
