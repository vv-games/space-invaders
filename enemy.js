class Enemy {
	constructor(index) {
		this.row = Math.floor(index / 10);
		this.col = index % 10;
		this.x = this.col * 30 + 20;
		this.y = this.row * 30 + 20;
	}

	draw() {
		stroke(255);
		rect(this.x, this.y, 20, 20);
	}
}