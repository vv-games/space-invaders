class Player {

	constructor() {
		this.x = width / 2;
		this.y = height - 20
		this.r = 10;
		this.speed = 6;
	}

	init() {

	}

	draw() {
		stroke(255);
		rect(this.x - 10, this.y - 5, 20, 10);
		rect(this.x - 5, this.y - 10, 10, 10);
	}

	move() {
		if (keyIsDown(LEFT_ARROW)) {
			this.x -= this.speed
			if (this.x <= 20)
				this.x = 20;
		} else if (keyIsDown(RIGHT_ARROW)) {
			this.x += this.speed
			if (this.x >= width - 20) {
				this.x = width - 20;
			}
		}
	}

	shoot() {
		bulletList.spawn(this.x, this.y)
		// bullets.push(new Bullet(this.x, this.y));
	}
}