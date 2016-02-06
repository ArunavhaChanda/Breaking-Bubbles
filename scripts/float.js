var bubbleStage = $('.stage');
var bub1 = $('#pos1');
var bub2 = $('#pos2');
var bub3 = $('#pos3');
var bub4 = $('#pos4');
var bLength = bubbleStage.length;

var bubbleW = bubbleStage.width();
var shouldMoveAround = true;

//randomly position bubbles
/*function randomPos()
{
	for(int i = 0; i < bLength; i++){
		var ranW = (Math.random()*window.innerWidth);
		var ranH = (Math.random() *window.innerHeight);

		bubbleStage[i].css('left', ranW);
		bubbleStage[i].css('top', ranH);
	});
}*/

/*float */
function moveAround() 
{
	for(var i = 1; i <= bLength; i++){
		if(shouldMoveAround){
			var ranW = (Math.random()*window.innerWidth);
			var ranH = (Math.random() *window.innerHeight);

			//check to make sure doesn't go past screen
			var limitW = window.innerWidth - bubbleW;
			var limitH = window.innerHeight - bubbleW;
			if(ranW > limitW){
				ranW = (limitW - bubbleW*2);
			}
			if(ranH > limitH){
				ranH = (limitH - bubbleW*2);
			}

			//get bubble position
			bub = $('#pos' + i);

			bub.animate({
				left: ranW,
				top: ranH
			}, 5000, function() {
				setTimeout(moveAround, 10);
			}); 
		}
	}
	
} 

/*Show the messenger*/
function message()
{
	$("div").append("<iframe class = 'frame' src='Chatroom-master/index.php'></iframe>");
	$('.frame').fadeIn();
}

moveAround();

//cick event, NEVER DO THIS
bub1.on('click', function(){
	shouldMoveAround = false;
	var bounce = $('#bounceEffect');
	bounce.remove();
	$('#pos1').stop().animate({
		width: '70%',
		height: '140%',
		left: $(window).width()/8.5,
		top: '-20%'
	}, 500); 

	//remove words
	$('.title').remove();
	$('#footer').fadeOut();
	bub2.fadeOut();
	bub3.fadeOut();
	bub4.fadeOut();
	message();
});
bub2.on('click', function(){
	shouldMoveAround = false;
	var bounce = $('#bounceEffect');
	bounce.remove();
	$('#pos2').stop().animate({
		width: '70%',
		height: '140%',
		left: $(window).width()/8.5,
		top: '-20%'
	}, 500); 

	$('.title').remove();
	$('#footer').fadeOut();
	bub1.fadeOut();
	bub3.fadeOut();
	bub4.fadeOut();
	message();
});
bub3.on('click', function(){
	shouldMoveAround = false;
	var bounce = $('#bounceEffect');
	bounce.remove();
	$('#pos3').stop().animate({
		width: '70%',
		height: '140%',
		left: $(window).width()/8.5,
		top: '-20%'
	}, 500); 

	$('.title').remove();
	$('#footer').fadeOut();
	bub1.fadeOut();
	bub2.fadeOut();
	bub4.fadeOut();
	message();
});
bub4.on('click', function(){
	shouldMoveAround = false;
	var bounce = $('#bounceEffect');
	bounce.remove();
	$('#pos4').stop().animate({
		width: '70%',
		height: '140%',
		left: $(window).width()/8.5,
		top: '-20%'
	}, 500); 

	$('.title').remove();
	$('#footer').fadeOut();
	bub1.fadeOut();
	bub2.fadeOut();
	bub3.fadeOut();
	message();
});

function togglestyle1(el){
    if(el.className == "on1") {
    	el.className="off1";
    } else {
    	el.className="on1";
    }
    bub2.fadeOut();
    bub3.fadeOut();
    bub4.fadeOut();
    message();
}

function togglestyle2(el){
    if(el.className == "on2") {
        el.className="off2";
    } else {
        el.className="on2";
    }
    bub1.fadeOut();
    bub2.fadeOut();
    bub3.fadeOut();
}

function togglestyle3(el){
    if(el.className == "on3") {
        el.className="off3";
    } else {
        el.className="on3";
    }
    bub1.fadeOut();
    bub4.fadeOut();
    bub3.fadeOut();
}

function togglestyle4(el){
    if(el.className == "on4") {
        el.className="off4";
    } else {
        el.className="on4";
        bub1.fadeOut();
    	bub2.fadeOut();
    	bub4.fadeOut();
    }
}
