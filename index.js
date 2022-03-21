import { state } from "./store.js";
import { buyItem, sellItem } from "./action.js";


const dataDisplay = document.querySelector("#state");
dataDisplay.innerHTML = state.item;

const button1 = document.querySelector("#buy");
const button2 = document.querySelector("#sell");

button1.addEventListener("click", buyItem);
button2.addEventListener("click", sellItem);
