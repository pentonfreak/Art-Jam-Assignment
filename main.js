//This is the Art Jam Assignment
//By: Khuong Nguyen
//Date: September 26, 2025


//Create a grid

const TILE_SIZE = 25;
const COLS = 27;
const ROWS = 27;
const WIDTH = TILE_SIZE * COLS;
const HEIGHT = TILE_SIZE * ROWS;

window.addEventListener("load", function() {
    const canvas = document.getElementById("canvas1");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const ctx = canvas.getContext("2d");

// Draw column letters (A-Z)
        for (let col = 0; col < COLS; col++) {
            const letter = String.fromCharCode(65 + col); // 65 = 'A'
            ctx.fillText(letter, col * TILE_SIZE + TILE_SIZE / 2 + TILE_SIZE, TILE_SIZE / 2);
        }

// Draw row numbers (1-26)
        for (let row = 0; row < ROWS; row++) {
            ctx.fillText((row + 1).toString(), TILE_SIZE / 2, row * TILE_SIZE + TILE_SIZE / 2 + TILE_SIZE);
        }

    function drawGrid() {
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                ctx.strokeRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            }
        }
    }

// Draw pixel self portrait
    function drawPixelArt() {
        // Shirt
        ctx.fillStyle = "#0900acff";
        ctx.fillRect(1 * TILE_SIZE, 23 * TILE_SIZE, 12 * TILE_SIZE, 4 * TILE_SIZE);
        ctx.fillRect(15 * TILE_SIZE, 23 * TILE_SIZE, 12 * TILE_SIZE, 4 * TILE_SIZE);
        ctx.fillRect(2 * TILE_SIZE, 22 * TILE_SIZE, 24 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(3 * TILE_SIZE, 21 * TILE_SIZE, 22 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(9 * TILE_SIZE, 20 * TILE_SIZE, 10 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(11 * TILE_SIZE, 19 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE);
        
        //Undershirt
        ctx.fillStyle = "#04eaffff";
        ctx.fillRect(13 * TILE_SIZE, 19 * TILE_SIZE, 2 * TILE_SIZE, 8 * TILE_SIZE);

        //Neck
        ctx.fillStyle = "#f5c6a5ff";
        ctx.fillRect(12 * TILE_SIZE, 18 * TILE_SIZE, 4 * TILE_SIZE, 1 * TILE_SIZE);

        //Face
        ctx.fillStyle = "#ffd0afff";
        ctx.fillRect(10 * TILE_SIZE, 17 * TILE_SIZE, 8 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(8 * TILE_SIZE, 16 * TILE_SIZE, 12 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(7 * TILE_SIZE, 15 * TILE_SIZE, 14 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(6 * TILE_SIZE, 14 * TILE_SIZE, 16 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(5 * TILE_SIZE, 6 * TILE_SIZE, 18 * TILE_SIZE, 8 * TILE_SIZE); //Middle of face
        ctx.fillRect(6 * TILE_SIZE, 5 * TILE_SIZE, 16 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(8 * TILE_SIZE, 4 * TILE_SIZE, 12 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(9 * TILE_SIZE, 3 * TILE_SIZE, 10 * TILE_SIZE, 1 * TILE_SIZE);
        
        //Glasses
        ctx.fillStyle = "#000000ff";
        ctx.fillRect(5 * TILE_SIZE, 8 * TILE_SIZE, 18 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(8 * TILE_SIZE, 9 * TILE_SIZE, 5 * TILE_SIZE, 2 * TILE_SIZE);
        ctx.fillRect(15 * TILE_SIZE,9 * TILE_SIZE, 5 * TILE_SIZE, 2 * TILE_SIZE);
        
        //Eyes
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(9 * TILE_SIZE, 9 * TILE_SIZE, 3 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(16 * TILE_SIZE, 9 * TILE_SIZE, 3 * TILE_SIZE, 1 * TILE_SIZE);

        //Pupils
        ctx.fillStyle = "#000000ff";
        ctx.fillRect(10 * TILE_SIZE, 9 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(17 * TILE_SIZE, 9 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);

        //Mouth
        ctx.fillStyle = "#ff0000ff";
        ctx.fillRect(12 * TILE_SIZE, 15 * TILE_SIZE, 4 * TILE_SIZE, 1 * TILE_SIZE);
        
    }
        
    drawGrid();
    drawPixelArt();
    console.log("drawPixelArt");
});
