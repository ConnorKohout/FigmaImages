let img;
let selectedImage = 1; // Default image (page1.png)

function preload() {
    img = loadImage(`assets/page${selectedImage}.png`);
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    if (img) {
        image(img, 100, 100, 600, 400);
    }
}

function keyPressed() {
    if (keyCode >= 49 && keyCode <= 54) { // Numbers 1-6 on keyboard
        selectedImage = keyCode - 48; // Convert keyCode to number (1-6)
        img = loadImage(`assets/page${selectedImage}.png`);
    }
}
