//This is the Art Jam Assignment
//By: Khuong Nguyen
//Date: September 26, 2025


//Create a grid

"use strict";

// Set up canvas and grid parameters
const TILE_SIZE = 25;
const COLS = 35;
const ROWS = 35;
const WIDTH = TILE_SIZE * COLS;
const HEIGHT = TILE_SIZE * ROWS;

window.addEventListener("load", function() {
    const canvas = document.getElementById("canvas1");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const ctx = canvas.getContext("2d");

// Draw column letters
        for (let col = 0; col < COLS; col++) {
            const letter = String.fromCharCode(65 + col); // 65 = 'A'
            ctx.fillText(letter, col * TILE_SIZE + TILE_SIZE / 2 + TILE_SIZE, TILE_SIZE / 2);
        }

// Draw row numbers
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

});

let mouseX = WIDTH / 2;
let mouseY = HEIGHT / 2;

window.addEventListener("load", function() {
    const canvas = document.getElementById("canvas1");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const ctx = canvas.getContext("2d");


    function drawGrid() {
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                ctx.strokeRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            }
        }
    }

    // Draw pixel self portrait
    function drawPixelArt() {
        
        //Face Silouette
        ctx.fillStyle = "#fec492ff";
        ctx.fillRect(8 * TILE_SIZE, 6 * TILE_SIZE, 20 * TILE_SIZE, 20 * TILE_SIZE);
        ctx.fillRect(7 * TILE_SIZE, 7 * TILE_SIZE, 1 * TILE_SIZE, 18 * TILE_SIZE);
        ctx.fillRect(28 * TILE_SIZE, 7 * TILE_SIZE, 1 * TILE_SIZE, 18 * TILE_SIZE);
        ctx.fillRect(9 * TILE_SIZE, 5 * TILE_SIZE, 18 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(9 * TILE_SIZE, 26 * TILE_SIZE, 18 * TILE_SIZE, 1 * TILE_SIZE);

        //Ears
        ctx.fillStyle = "#fec492ff"; 
        ctx.fillRect(6 * TILE_SIZE, 13 * TILE_SIZE, 2 * TILE_SIZE, 4 * TILE_SIZE);
        ctx.fillRect(28 * TILE_SIZE, 13 * TILE_SIZE, 2 * TILE_SIZE, 4 * TILE_SIZE);

        //Eyesockets
        ctx.fillStyle = "#f9ba83ff"; 
        ctx.fillRect(12 * TILE_SIZE, 13 * TILE_SIZE, 4 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(12 * TILE_SIZE, 14 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(15 * TILE_SIZE, 14 * TILE_SIZE, 1 * TILE_SIZE, 4 * TILE_SIZE);
        ctx.fillRect(15 * TILE_SIZE, 18 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE); 
        ctx.fillRect(22 * TILE_SIZE, 14 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(22 * TILE_SIZE, 13 * TILE_SIZE, 3 * TILE_SIZE, 1 * TILE_SIZE);
        
        //Eyes
        ctx.fillStyle = "black";
        ctx.fillRect(13 * TILE_SIZE, 14 * TILE_SIZE, 1 * TILE_SIZE, 2 * TILE_SIZE);
        ctx.fillRect(23 * TILE_SIZE, 14 * TILE_SIZE, 1 * TILE_SIZE, 2 * TILE_SIZE);

        //Eyebrows
        ctx.fillStyle = "#3b2f2fff"; 
        ctx.fillRect(12 * TILE_SIZE, 12 * TILE_SIZE, 4 * TILE_SIZE, 1 * TILE_SIZE); //Left eyebrow
        ctx.fillRect(21 * TILE_SIZE, 12 * TILE_SIZE, 4 * TILE_SIZE, 1 * TILE_SIZE); //Right eyebrow
        ctx.fillStyle = "#6d4535ff";
        ctx.fillRect(13 * TILE_SIZE, 12 * TILE_SIZE, 3 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(22 * TILE_SIZE, 12 * TILE_SIZE, 3 * TILE_SIZE, 1 * TILE_SIZE);

        //Nose
        ctx.fillStyle = "#e59650ff"; 
        ctx.fillRect(18 * TILE_SIZE, 16 * TILE_SIZE, 1 * TILE_SIZE, 3 * TILE_SIZE);
        ctx.fillRect(17 * TILE_SIZE, 19 * TILE_SIZE, 3 * TILE_SIZE, 1 * TILE_SIZE);

        //Mouth
        ctx.fillStyle = "#ffffffff";
        ctx.fillRect(15 * TILE_SIZE, 21 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(16 * TILE_SIZE, 22 * TILE_SIZE, 4 * TILE_SIZE, 1 * TILE_SIZE);

        //Hair
        ctx.fillStyle = "#703a1cff"; 
        ctx.fillRect(6 * TILE_SIZE, 9 * TILE_SIZE, 1 * TILE_SIZE, 4 * TILE_SIZE);
        ctx.fillRect(6 * TILE_SIZE, 7 * TILE_SIZE, 1 * TILE_SIZE, 2 * TILE_SIZE);
        ctx.fillRect(6 * TILE_SIZE, 6 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(7 * TILE_SIZE, 5 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(8 * TILE_SIZE, 4 * TILE_SIZE, 20 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(27 * TILE_SIZE, 5 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(28 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE, 2 * TILE_SIZE);
        ctx.fillRect(29 * TILE_SIZE, 7 * TILE_SIZE, 1 * TILE_SIZE, 6 * TILE_SIZE);
        ctx.fillRect(11 * TILE_SIZE, 3 * TILE_SIZE, 16 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(14 * TILE_SIZE, 2 * TILE_SIZE, 12 * TILE_SIZE, 1 * TILE_SIZE);

        ctx.fillRect(9 * TILE_SIZE, 5 * TILE_SIZE, 18 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(8 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(27 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(7 * TILE_SIZE, 7 * TILE_SIZE, 1 * TILE_SIZE, 5 * TILE_SIZE);
        ctx.fillRect(28 * TILE_SIZE, 7 * TILE_SIZE, 1 * TILE_SIZE, 5 * TILE_SIZE);
        ctx.fillRect(15 * TILE_SIZE, 6 * TILE_SIZE, 12 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(16 * TILE_SIZE, 7 * TILE_SIZE, 12 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(18 * TILE_SIZE, 8 * TILE_SIZE, 10 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(22 * TILE_SIZE, 9 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE);

        //Hair Shading
        ctx.fillStyle = "#4b2310ff";
        ctx.fillRect(8 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(9 * TILE_SIZE, 5 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(7 * TILE_SIZE, 9 * TILE_SIZE, 1 * TILE_SIZE, 3 * TILE_SIZE);
        ctx.fillRect(6 * TILE_SIZE, 12 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(28 * TILE_SIZE, 11 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(29 * TILE_SIZE, 12 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);

        //Hairlines
        ctx.fillStyle = ("#ffb371ff");
        ctx.fillRect(9 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(8 * TILE_SIZE, 7 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(14 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(15 * TILE_SIZE, 7 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(16 * TILE_SIZE, 8 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(18 * TILE_SIZE, 9 * TILE_SIZE, 4 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(22 * TILE_SIZE, 10 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE);

        //Glasses
        ctx.fillStyle = "black";
        ctx.fillRect(11 * TILE_SIZE, 13 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE)
        ctx.fillRect(12 * TILE_SIZE, 16 * TILE_SIZE, 4 * TILE_SIZE, 1 * TILE_SIZE)
        ctx.fillRect(11 * TILE_SIZE, 14 * TILE_SIZE, 1 * TILE_SIZE, 2 * TILE_SIZE);
        ctx.fillRect(16 * TILE_SIZE, 14 * TILE_SIZE, 1 * TILE_SIZE, 2 * TILE_SIZE);

        ctx.fillRect(20 * TILE_SIZE, 13 * TILE_SIZE, 6 * TILE_SIZE, 1 * TILE_SIZE)
        ctx.fillRect(21 * TILE_SIZE, 16 * TILE_SIZE, 4 * TILE_SIZE, 1 * TILE_SIZE)
        ctx.fillRect(20 * TILE_SIZE, 14 * TILE_SIZE, 1 * TILE_SIZE, 2 * TILE_SIZE);
        ctx.fillRect(25 * TILE_SIZE, 14 * TILE_SIZE, 1 * TILE_SIZE, 2 * TILE_SIZE);

        //Glasses lenses
        ctx.fillStyle = "#ffffffff"; 
        ctx.fillRect(12 * TILE_SIZE, 14 * TILE_SIZE, 4 * TILE_SIZE, 2 * TILE_SIZE);
        ctx.fillRect(21 * TILE_SIZE, 14 * TILE_SIZE, 4 * TILE_SIZE, 2 * TILE_SIZE);

        //Glasses bridge
        ctx.fillStyle = "black";
        ctx.fillRect(17 * TILE_SIZE, 13 * TILE_SIZE, 3 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(6 * TILE_SIZE, 13 * TILE_SIZE, 5 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(26 * TILE_SIZE, 13 * TILE_SIZE, 4 * TILE_SIZE, 1 * TILE_SIZE);

        //Face shading
        ctx.fillStyle = "#f9ba83ff";
        ctx.fillRect(7 * TILE_SIZE, 20 * TILE_SIZE, 1 * TILE_SIZE, 5 * TILE_SIZE);
        ctx.fillRect(8 * TILE_SIZE, 25 * TILE_SIZE, 1 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(9 * TILE_SIZE, 26 * TILE_SIZE, 13 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(17 * TILE_SIZE, 24 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);

        //Pupils
        ctx.fillStyle = "#3b2f2fff";
        ctx.fillRect(13 * TILE_SIZE, 15 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
        ctx.fillRect(22 * TILE_SIZE, 15 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);

        window.addEventListener("click", mouseClicked);

        //Function to make pupils move up when clicked
        function mouseClicked() {
            ctx.fillStyle = "#ffffffff";
            ctx.fillRect(13 * TILE_SIZE, 15 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
            ctx.fillRect(22 * TILE_SIZE, 15 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
            ctx.fillStyle = "#3b2f2fff";
            ctx.fillRect(13 * TILE_SIZE, 14 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
            ctx.fillRect(22 * TILE_SIZE, 14 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
            }
        //Function to make pupils move back down when double clicked
        window.addEventListener("dblclick", mouseClicked2);
        function mouseClicked2() {
            ctx.fillStyle = "#ffffffff";
            ctx.fillRect(13 * TILE_SIZE, 14 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
            ctx.fillRect(22 * TILE_SIZE, 14 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
            ctx.fillStyle = "#3b2f2fff";
            ctx.fillRect(13 * TILE_SIZE, 15 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
            ctx.fillRect(22 * TILE_SIZE, 15 * TILE_SIZE, 2 * TILE_SIZE, 1 * TILE_SIZE);
            }
        
}

    drawGrid();
    drawPixelArt();
});






