var cursor = $(".cursor"),
		follower = $(".cursor-follower"),
    posX = 0,	//좌표값
		posY = 0,
    mouseX = 0, //마우스값
		mouseY = 0;

$(document).on("mousemove",function(e){
	mouseX = e.pageX;
	mouseY = e.pageY;

// 	posX += (mouseX - posX) / 9;
//  posY += (mouseY - posY) / 9;
	
// 	cursor.css("left", mouseX).css("top", mouseY);
// 	follower.css("left", posX).css("top", posY);
});

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function(){
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;
		
		TweenMax.set(follower, {
			css: {
				left: posX - 12,
				top: posY - 12
			}
		});
		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		});
	}
});

$(".hover").on("mouseenter",function(){
	cursor.addClass("active");
	follower.addClass("active");
});

$(".hover").on("mouseleave",function(){
	cursor.removeClass("active");
	follower.removeClass("active");
});
