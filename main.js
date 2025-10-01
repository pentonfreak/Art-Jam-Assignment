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
       

        // Pupils follow mouse
        // Left eye center 
        const leftEyeCenter = {
            x: 13 * TILE_SIZE,
            y: 15 * TILE_SIZE
        };
        // Right eye center
        const rightEyeCenter = {
            x: 23 * TILE_SIZE,
            y: 15 * TILE_SIZE
        };

        // Pupil movement radius (in pixels)
        const pupilRadius = 10;

        // Calculate direction to mouse for each eye
        function getPupilOffset(eye) {
            const dx = mouseX - eye.x;
            const dy = mouseY - eye.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist === 0) return { x: 0, y: 0 };
            const maxDist = pupilRadius;
            return {
                x: (dx / dist) * Math.min(dist, maxDist),
                y: (dy / dist) * Math.min(dist, maxDist)
            };
        }

        const leftOffset = getPupilOffset(leftEyeCenter);
        const rightOffset = getPupilOffset(rightEyeCenter);

        // Draw pupils
        ctx.fillStyle = "#3b2f2fff";
        ctx.fillRect(
            Math.round(leftEyeCenter.x + leftOffset.x - TILE_SIZE / 2),
            Math.round(leftEyeCenter.y + leftOffset.y - TILE_SIZE / 2),
            2 * TILE_SIZE, 1 * TILE_SIZE
        );
        ctx.fillRect(
            Math.round(rightEyeCenter.x + rightOffset.x - TILE_SIZE / 2),
            Math.round(rightEyeCenter.y + rightOffset.y - TILE_SIZE / 2),
            2 * TILE_SIZE, 1 * TILE_SIZE
        );
    }

    function redraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Redraw column letters
        for (let col = 0; col < COLS; col++) {
            const letter = String.fromCharCode(65 + col);
            ctx.fillText(letter, col * TILE_SIZE + TILE_SIZE / 2 + TILE_SIZE, TILE_SIZE / 2);
        }
        // Redraw row numbers
        for (let row = 0; row < ROWS; row++) {
            ctx.fillText((row + 1).toString(), TILE_SIZE / 2, row * TILE_SIZE + TILE_SIZE / 2 + TILE_SIZE);
        }
        drawGrid();
        drawPixelArt();
    }

    redraw();

    // Track mouse movement
    canvas.addEventListener("mousemove", function(e) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        redraw();
    });

    }
);
        
    drawGrid();
    drawPixelArt();






