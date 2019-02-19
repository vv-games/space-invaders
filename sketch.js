let player;
let bullets = [];
let enemies = [];
let time = 0;
let enemy_speed = 10;
let new_row = false;
let bulletList;

function setup() {
	createCanvas(400, 400);
	player = new Player();
	bulletList = new BulletList();

	for (let n = 0; n < 24; n++) {
		enemies.push(new Enemy(n));
	}
}

function keyPressed() {
	if (keyCode == 32) {
		player.shoot();
	}

	return false;
}

function draw() {
	background(0);

	player.move();
	player.draw();


	bulletList.move();

	enemy_max = 0;
	enemy_min = 0;

	if (enemies.length) {
		for (let k = 0; k < enemies.length; k++) {
			enemies[k].draw();
			if (!(time % 30)) {
				enemy_max = max(enemy_max, enemies[k].x)
				enemy_min = enemy_min != 0 ? min(enemy_min, enemies[k].x) : enemies[k].x;
			}
		}

		if (!(time % 30)) {
			if ((enemy_max >= width - 40 || enemy_min <= 10) && !new_row) {
				for (let k = 0; k < enemies.length; k++) {
					enemies[k].y += 30;
				}
				new_row = true;
				enemy_speed = enemy_speed * -1;
			} else {
				for (let k = 0; k < enemies.length; k++) {
					enemies[k].x += enemy_speed;
				}
				new_row = false;
			}


		}

	}


	time++;
}
