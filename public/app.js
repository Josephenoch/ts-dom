import { GAMEDIV, NEW_GAME_BTN, EASY_BTN, HARD_BTN } from "./htmlElements.js";
import game from "./game.js";
const HARD_GAME_LEVEL = 6;
const EASY_GAME_LEVEL = 3;
NEW_GAME_BTN.addEventListener("click", () => game(HARD_GAME_LEVEL, GAMEDIV));
HARD_BTN.addEventListener("click", () => game(HARD_GAME_LEVEL, GAMEDIV));
EASY_BTN.addEventListener("click", () => game(EASY_GAME_LEVEL, GAMEDIV));
console.log(game(HARD_GAME_LEVEL, GAMEDIV));
game(HARD_GAME_LEVEL, GAMEDIV);
