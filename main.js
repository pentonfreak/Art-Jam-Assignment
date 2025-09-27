//This is the Art Jam Assignment
//By: Khuong Nguyen
//Date: September 26, 2025


//Create a grid

const TILE_SIZE = 32;
const COLS = 15;
const ROWS = 20;
const WIDTH = TILE_SIZE * COLS;
const HEIGHT = TILE_SIZE * ROWS;

window.addEventListener("load", function() {
    const canvas = document.getElementById("canvas1");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    
    function drawGrid() {
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                ctx.strokeRect(row * TILE_SIZE, col *  TILE_SIZE, TILE_SIZE, TILE_SIZE);
            
            }
        }
    }
    drawGrid();
});
