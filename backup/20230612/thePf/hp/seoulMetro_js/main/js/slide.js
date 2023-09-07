$(function(){
	var moving=$('.center_images');
	
	function left(){
		moving.find('ul').animate({left:228*-1},500,
		function(){
			$(this).children('li:first').insertAfter($(this).children('li:last'));
			$(this).css('left','0');
		});
	}
	function right(){
		moving.find('ul li:last').insertBefore(moving.find('ul li:first'));
		moving.find('ul').css({left:228*-1}).animate({left:0},500);
		
	}
	
	$('.left').click(function(){
		right();
		return false;
	});
	$('.right').click(function(){
		left();
		return false;
	});
	
	
	var btnNum=0;
	function autoPlay(){
		
		$('.right').trigger('click');
		auto1=setTimeout(autoPlay,2500);
		
	}
	auto1=setTimeout(autoPlay,2500);
	
	
	moving.hover(function(){
		clearTimeout(auto1);
	},function(){
		auto1=setTimeout(autoPlay,2500);
	});
});