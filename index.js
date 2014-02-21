(function(canvas, context){
    context.translate(canvas.width/2, canvas.height/2);
    context.strokeStyle = 'black';
    var size = 5;
    var angle = Math.PI/2;

    var draw = function(){
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(size, 0);
	context.stroke();
    }

    var forward = function(){
	context.translate(size, 0);
    }

    var left = function(){
	context.rotate(-angle);
    }

    var right = function(){
	context.rotate(angle);
    }

    var move = function(goRight){
	forward();
	if (goRight) {
	    right();
	} else {
	    left();
	}
    }

    var direction = function(n){
	return (((n & -n) << 1) & n) !== 0;
    }

    var n = 1; var max = Math.pow(2,12);
    while (n <= max) {
	draw();
	move(direction(n++));
    }
})(a,c);
