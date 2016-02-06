function expansion(e)
{
	var bounce = $('#bounceEffect');
	bounce.remove();
	bubbleStage.animate({
		width: '70%',
		height: '140%',
		left: $(window).width()/8.5,
		top: '-20%'
	}, 500); 
}

//click event
var bubbleStage = $('.stage');
var bubbleTarget = $('.bubble');
bubbleStage.on('click', expansion);
