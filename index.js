import { buyItem, sellItem } from "./action.js";
import { BUY, SELL } from "./const.js";

var store = localStorage.getItem("store") || { item: 0, value: 0 };

export const dataDisplay1 = document.querySelector("#state-item");
export const dataDisplay2 = document.querySelector("#state-value");

dataDisplay1.innerHTML = store.item ? store.item : 0;
dataDisplay2.innerHTML = store.value ? store.value : 0;

const button1 = document.querySelector("#buy");
const button2 = document.querySelector("#sell");

button1.addEventListener("click", () => buyItem({ type: BUY }));
button2.addEventListener("click", () => sellItem({ type: SELL }));
console.log("localStorage => ", localStorage)

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    localStorage.store ? location.reload() : null;
    localStorage.clear();
}
