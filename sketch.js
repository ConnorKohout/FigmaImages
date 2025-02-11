let img;

function preload() {
    img = loadImage('assets/page1.png');  // Load from assets folder
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    image(img, 100, 100, 600, 400);
}
