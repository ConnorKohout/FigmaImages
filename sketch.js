let images = [];
let currentPage = 0;

function preload() {
    for (let i = 1; i <= 6; i++) {
        images.push(loadImage(`assets/page${i}.png`));
    }
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    image(images[currentPage], 100, 100, 600, 400);
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        currentPage = (currentPage + 1) % images.length;
    } else if (keyCode === LEFT_ARROW) {
        currentPage = (currentPage - 1 + images.length) % images.length;
    }
}
