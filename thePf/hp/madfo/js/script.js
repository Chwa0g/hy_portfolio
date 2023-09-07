$(function(){
	$(window).bind('resize', function(e)
		{
		if (window.RT) clearTimeout(window.RT);
		window.RT = setTimeout(function()
		{
		this.location.reload(false); //false to get page from cache
		}, 100);
	});
	
	var interval=2000;
	$('.main_bg').each(function(){
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
	if ($(window).width()>833&&$(window).width()<1920){
		
		$(window).scroll(function(){
			var sct=$(this).scrollTop();
			$('#scroll').text(sct);
			
			if (sct>500){
				$('#hover_menu').stop().animate({opacity:1},100);
				$(' #main_bg_box').stop().animate({opacity:1},100);
			}else{
				$('#hover_menu').stop().animate({opacity:0},100);
				$(' #main_bg_box').stop().animate({opacity:0},100);
			}
		});
	}else{
		var oneD=$('.header_gnb>ul>li');
		var twoD=$('.header_gnb>ul>li>ul');
		
		twoD.hide();  
		oneD.click(function(){ //한번 클릭했을 때
			var tg=$(this).children('ul');
			
			if(tg.css('display')=='none'){
				tg.slideDown(500);
			}else{
				tg.slideUp(500);
			};
		});
	};
});
$(function(){
	if ($(window).width()>833&&$(window).width()<1920){}
});

$(function(){
	if ($(window).width()>607&&$(window).width()<832){
		
		var btn=$('.menu_box ul li:nth-child(5) a');
		var head=$('#header');
		var headL=$('.header_logo');
		var a=1;
		
		btn.click(function(){
			if(a>0){
				head.stop().animate({right:0},500);
				headL.stop().animate({left:0},500);
				a= a - 1;
			}else{
				head.stop().animate({right:'-60%'},500);
				headL.stop().animate({left:'-40%'},500);
				a= a+1;
			};
			return false;
		});
	};
});

$(function(){
	if ($(window).width()>488&&$(window).width()<606){
		
		var btn=$('.menu_box ul li:nth-child(5) a');
		var head=$('#header');
		var headL=$('.header_logo');
		var a=1;
		
		btn.click(function(){
			if(a>0){
				head.stop().animate({right:0},500);
				headL.stop().animate({left:0},500);
				a= a - 1;
			}else{
				head.stop().animate({right:'-80%'},500);
				headL.stop().animate({left:'-20%'},500);
				a= a+1;
			};
			return false;
		});
	};
});


$(function(){
	if ($(window).width()>0&&$(window).width()<487){
		                                             
		var btn=$('.menu_box ul li:nth-child(5) a');
		var head=$('#header');
		var headL=$('.header_logo');
		var a=1;
		
		btn.click(function(){
			if(a>0){
				head.stop().animate({right:0},500);
				headL.stop().animate({left:0},500);
				a= a - 1;
			}else{
				head.stop().animate({right:'-80%'},500);
				headL.stop().animate({left:'-20%'},500);
				a= a+1;
			};
			return false;
		});
	};
});
