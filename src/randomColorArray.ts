import randomColor from "./randomColor.js";
import { LARGEST_HEX } from "./randomColor.js";
const randomColorArray = (limit:number):string[]=>{
    const colorArray = []
    for(let i =0;i<limit;i++){
        colorArray.push(randomColor(LARGEST_HEX))
    }
    return colorArray
}
export default randomColorArray