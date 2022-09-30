class Player {
	constructor(xPos, yPos, width, height) {
		this.width = width;
		this.height = height;
		this.xPos = xPos;
		this.yPos = yPos;
	}

	draw() {
		c.beginPath();
		c.rect(this.xPos, this.yPos, this.width, this.height);
		c.fillStyle = '#fd0002';
		c.fill();
	}

	update() {

		// Move left
		if (controller.left) {
			physics.velocity_x -= attributes.speedForce;
		}

		// Move right
		if (controller.right) {
			physics.velocity_x += attributes.speedForce;
		}

		// Jump up
		if (controller.up && attributes.jump) {
			attributes.jump = false;
			physics.velocity_y -= attributes.jumpForce;
		}

		// Run
		if (controller.run) {
			if (controller.right) {
				physics.velocity_x += attributes.runForce;
			} else if (controller.left) {
				physics.velocity_x -= attributes.runForce;
			}
		}

		// Checks floor
		if (this.yPos > canvas.height - this.height - physics.gravity - physics.velocity_y) {
			attributes.jump = true;
			physics.velocity_y = 0;
			this.yPos = canvas.height - this.height;
		} else {
			physics.velocity_y += physics.gravity;
		}

		// Physics
		physics.velocity_x *= physics.friction;
		physics.velocity_y *= physics.friction;
		this.yPos += physics.velocity_y;
		this.xPos += physics.velocity_x;

		// Stop moving
		if (Math.abs(physics.velocity_x) < 0.1)  {
			physics.velocity_x = 0;
		}

		// Wall
		if (this.xPos < 0 - this.width) {
			this.xPos = canvas.width;
		}

		if (this.xPos > canvas.width) {
			this.xPos = 0 - this.width;
		}

		this.draw();
	}
}

window.addEventListener('keydown', controller.keyListener);
window.addEventListener('keyup', controller.keyListener);