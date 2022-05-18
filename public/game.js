import createDiv from "./createDiv.js";
import { COLORH1 } from "./htmlElements.js";
import randomColorArray from "./randomColorArray.js";
const game = (limit, GAMEDIV) => {
    const colorArray = randomColorArray(limit);
    for (let i = 0; i < limit; i++) {
        let newDiv = createDiv();
        newDiv.style.backgroundColor = colorArray[i];
        GAMEDIV.appendChild(newDiv);
    }
    const h1color = colorArray[Math.floor(Math.random() * limit + 1)];
    console.log(h1color);
    COLORH1.innerHTML = h1color;
};
export default game;
