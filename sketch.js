var bird;
var pipes = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	background(0);

	for (var i = pipes.length - 1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();

		if (pipes[i].hits(bird)) {
			console.log("HIT");
		}
		if (bird.hitsBottom()) {
			console.log("hit bottom");
		}
 
		if (pipes[i].offscreen()) {
			pipes.splice(i, 1);
		}
	}

	bird.update();
	bird.show();

	if (frameCount % 75 == 0) {
		pipes.push(new Pipe());
	}
	if (mouseIsPressed) {
		bird.up();
	}
}

function keyPressed() {
	if (key == ' ') {
		bird.up();
		//console.log("SPACE");
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}