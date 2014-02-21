(function(canvas, context){
    context.translate(canvas.width/2, canvas.height/2);
    context.strokeStyle = 'black';
    var size = 50;
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

    var move = function(goLeft){
	forward();
	if (goLeft) {
	    left();
	} else {
	    right();
	}
    }

    draw();
    move(true);

    draw();
    move(true);

    draw();
    move (false);

    draw();
})(a,c);
