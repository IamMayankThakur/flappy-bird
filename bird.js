function Bird() {
	this.y = height / 2;
	this.x = 64;

	this.gravity = 0.7;
	this.lift = -12;
	this.velocity = 0;

	this.show = function () {
		fill(255);
		ellipse(this.x, this.y, 32, 32);
	}

	this.up = function () {
		this.velocity += this.lift;
	}

	this.update = function () {
		this.velocity += this.gravity;
		// this.velocity *= 0.9;
		this.y += this.velocity;

		if (this.y > height) {
			this.y = height;
			this.velocity = 0;
		}

		if (this.y < 0) {
			this.y = 0;
			this.velocity = 0;
		}

	}
	this.hitsEdge = function () {
		if (this.y <= 0 || this.y >= height) {
			return true;
		} else
			return false;
	}

}