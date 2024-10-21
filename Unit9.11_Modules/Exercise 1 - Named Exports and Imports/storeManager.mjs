import {addItem, removeItem, listItems} from "./inventory.mjs";

addItem("Bread");
addItem("Milk");
addItem("Eggs");
listItems();

removeItem("Milk");
listItems();
