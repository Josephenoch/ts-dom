const createDiv = ():HTMLDivElement=>{
    const div = document.createElement("div")
    div.classList.add("box")
    return div
}

export default createDiv
