export const LARGEST_HEX = 255;
let randomColor;
randomColor = (LARGEST_HEX) => {
    const r = Math.floor(Math.random() * LARGEST_HEX + 1);
    const g = Math.floor(Math.random() * LARGEST_HEX + 1);
    const b = Math.floor(Math.random() * LARGEST_HEX + 1);
    return `rgb(${r}, ${g}, ${b})`;
};
export default randomColor;
