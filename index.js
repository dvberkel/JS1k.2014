(function(canvas, context){
    context.translate(canvas.width/2, canvas.height/2);
    context.strokeStyle = 'black';
    var size = 50;

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
	context.rotate(-Math.PI/2);
    }

    var right = function(){
	context.rotate(Math.PI/2);
    }

    draw();
    forward();
    left();

    draw();
    forward();
    left();

    draw();
    forward();
    right();

    draw();
})(a,c);
