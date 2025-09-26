import { ROWS } from "./main.js";

export class World {
    constructor() {
        this.level1 = [];
    }
    drawGrid() {
       for (let ROWS = 0; ROWS < GAME_HEIGHT / TILE_SIZE; ROWS++) {
                   for (let COLS = 0; COLS < GAME_WIDTH / TILE_SIZE; COLS++) {
                       ctx.strokeStyle = 'black';
                       ctx.strokeRect(
                           COLS * TILE_SIZE,
                           ROWS * TILE_SIZE,
                           TILE_SIZE,
                           TILE_SIZE
                       );
                   }
               }
           }
}