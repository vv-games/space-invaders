class BulletList {
	constructor() {
		this.list = [];
	}

	spawn(x, y) {
		this.list.push(new Bullet(x, y));
	}

	move() {
		if (this.list.length) {
			for (let i = 0; i < this.list.length; i++) {
				this.list[i].draw();


				for (let j = 0; j < enemies.length; j++) {
					if (!this.list[i]) {
						continue;
					}

					let v1 = createVector(this.list[i].x, this.list[i].y);
					let v2 = createVector(enemies[j].x + 10, enemies[j].y + 10);

					if (v1.dist(v2) <= 15) {
						enemies.splice(j, 1);
						this.list.splice(i, 1);
						continue;
					}
				}

				if (!this.list[i]) {
					continue;
				}



				if (this.list[i] && this.list[i].y < 0) {
					this.list.splice(i, 1);
				}
			}
		}
	}
}