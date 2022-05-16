import { Invoice } from "./Classes/Invoice.js";
const form = document.querySelector(".new-item-form");
// input
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.value);
});
const InvOne = new Invoice("James", 300, "website deployment");
console.log(InvOne.format());
