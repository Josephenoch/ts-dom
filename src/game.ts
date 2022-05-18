import createDiv from "./createDiv.js"
import check from "./check.js"
import { COLORH1, GAMEDIV } from "./htmlElements.js"
import randomColorArray from "./randomColorArray.js"

let level:number

const game = (limit:number, GAMEDIV:HTMLDivElement):number => {
    GAMEDIV.innerHTML=""

    window.localStorage.setItem("last-level", String(limit))
    const colorArray = randomColorArray(limit)
    for(let i =0;i<limit;i++){
        let newDiv = createDiv()
        newDiv.style.backgroundColor = colorArray[i]
        newDiv.addEventListener("click",()=>check(newDiv))
        GAMEDIV.appendChild(newDiv)
    }

    const numb = Math.floor(Math.random()*limit)
    COLORH1.innerHTML = colorArray[numb]
    level=limit
    return level
}

export default game