const controller = {
	left: 	false,
	right: 	false,
	up: 	false,
	run: 	false,

	keyListener: function(event) {
		var key_state = (event.type == 'keydown') ? true : false;

		switch(event.keyCode) {
			case 37: // A
				controller.left = key_state;
			break;
			case 38: // W
				controller.up = key_state;
			break;
			case 39: // D
				controller.right = key_state;
			break;
			case 16: // Left Shift
				controller.run = key_state;
			break;
		}
	}
}