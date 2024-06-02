const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const maxBubbles = 50;
const bubbles = [];

class Bubble {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * canvas.height;
        this.radius = Math.random() * 20 + 5;
        this.speedY = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.5;
    }

    update() {
        this.y -= this.speedY;

        if (this.y < -this.radius) {
            this.reset();
            this.y = canvas.height + this.radius;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(173, 216, 230, ${this.opacity})`; // Light blue bubbles
        ctx.fill();
        ctx.closePath();
    }
}

for (let i = 0; i < maxBubbles; i++) {
    bubbles.push(new Bubble());
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let bubble of bubbles) {
        bubble.update();
        bubble.draw();
    }
    requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
