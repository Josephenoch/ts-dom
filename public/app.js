"use strict";
// const form = document.querySelector(".new-item-form") as HTMLFormElement
//input
// const type = document.querySelector("#type") as HTMLSelectElement
// const toFrom = document.querySelector("#tofrom") as HTMLInputElement
// const details = document.querySelector("#details") as HTMLInputElement
// const amount = document.querySelector("#amount") as HTMLInputElement
// form.addEventListener("submit",(e:Event)=>{
//     e.preventDefault()
//     console.log(
//         type.value,
//         toFrom.value,
//         details.value,
//         amount.value
//     )
// })
class Invoice {
    constructor(client, amount, details) {
        this.client = client;
        this.amount = amount;
        this.details = details;
        this.format = () => {
            return `${this.client} owes $${this.amount} for ${this.details}`;
        };
    }
}
const InvOne = new Invoice("James", 300, "website deployment");
console.log(InvOne.format());
