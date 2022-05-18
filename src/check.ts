import { COLORH1, GAMEDIV, HEADER } from "./htmlElements.js"

const check = (d:HTMLDivElement):boolean=>{
    const clickedDiv = d
    const allDivs = GAMEDIV.childNodes
    if(clickedDiv.style.backgroundColor!=COLORH1.innerText.toLowerCase()){
        console.log(clickedDiv.style.backgroundColor,COLORH1.innerText.toLowerCase())
        clickedDiv.style.visibility = "hidden"
        return false
    }
    else{
        for(let i =0;i<allDivs.length;i++){
            const child = allDivs[i] as HTMLDivElement
            child.style.visibility="visible"
            child.style.backgroundColor =clickedDiv.style.backgroundColor 
        }
        HEADER.style.background=clickedDiv.style.backgroundColor 
        return true
    }
}

export default check