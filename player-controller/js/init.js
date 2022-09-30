player = new Player(50, 50, 50, 50);

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	player.update();
}

animate();