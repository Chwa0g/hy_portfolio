$(function(){
	var interval=2000;
	$('.popup_bottom').each(function(){
		var timer;
		var container=$(this);
		function switchImg(){
			var anchors=container.find('a');
			var first=anchors.eq(0);
			var second=anchors.eq(1);
			first.fadeOut().appendTo(container);
			second.fadeIn();
		}
		function startTimer(){
			timer=setInterval(switchImg,interval);
		}
		function stopTimer(){
			clearInterval(timer);
		}
		startTimer();
		container.find('a').hover(stopTimer,startTimer);
	});
});
$(function(){
	$('.globalq_anchor').click(function(){
		$('.globalq_tab').toggle();
	});
});
$(function(){
	$('.searchq_anchor').click(function(){
		var block=$('.searchq_tab');
		if(block==){
			block.slideDown(1000);
		}
		else{
			block.slideUp(1000);
		}
	});
});
















