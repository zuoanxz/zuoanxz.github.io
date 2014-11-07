function draw(id) {
	var canvas = document.getElementById(id);
	if (canvas==null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	var dx = 150;
	var dy = 150;
	var s = 100;
	context.beginPath();
	context.fillStyle = 'rgb(100, 255, 100)';
	context.strokeStyle = 'rgb(0, 0, 100)';
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI*11/15;
	for (var i=0; i<30; i++) {
	    x = Math.sin(i*dig);
	    y = Math.cos(i*dig);
	    context.lineTo(dx+x*s, dy+y*s);
	}
	context.closePath();
	context.fill();
	context.stroke();
}
