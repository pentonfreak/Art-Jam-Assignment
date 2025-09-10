const TILE_SIZE = 32;
const COLS = 15;
const ROWS = 20;
const GAME_WIDTH = COLS * TILE_SIZE;
const GAME_HEIGHT = ROWS * TILE_SIZE;

window.addEventListener('load', function()
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    function drawGrid() {
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                for (let col = 0; col < COLS; col++){
                    ctx.strokeRect(0 * TILE_SIZE, 0 * TILE_SIZE
                                        , TILE_SIZE, TILE_SIZE);
                }
                
            }
    }
}
    drawGrid();
)