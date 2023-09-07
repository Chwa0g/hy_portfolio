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
	var listbg=$('.searchq');
	var anchor=$('.searchq_anchor');
	var tab=$('.searchq_tab');
	var bgchange=listbg.attr('')
	anchor.click(function(){
		tab.slideToggle(function(){
		});
	});
});


$(function(){
	
	$('body').on("mousewheel", function(e){ 
		var ab=$(window).scrollTop();
		var detail=e.originalEvent.detail;
		var delta=e.originalEvent.detail*(-30);
		
		if(e.originalEvent.wheelDelta < 0 ) { 
		//scroll down 
			$('html, body').stop().animate({ scrollTop : '+=950px' },{duration:700, ease:'easeOutCubic'}); 
		}else { 
		//scroll up 
			$('html, body').stop().animate({ scrollTop : '-=950px' },{duration:700, ease:'easeOutCubic'}); 
		} //prevent page fom scrolling 
		return false; 
	});  
	
	$('body').on("DOMMouseScroll", function(e){ 
		var ab=$(window).scrollTop();
		var detail=e.originalEvent.detail;
		var delta=e.originalEvent.detail*(-30);
		
		if(delta < 0 ) { 
		//scroll down 
			$('html, body').stop().animate({ scrollTop : '+=950px' },{duration:700, ease:'easeOutCubic'}); 
		}else { 
		//scroll up 
			$('html, body').stop().animate({ scrollTop : '-=950px' },{duration:700, ease:'easeOutCubic'}); 
		} //prevent page fom scrolling 
		return false; 
	}); 
});



$(function(){
	$(window).scroll(function(){
		var wsct=$(window).scrollTop();
		$('#n1').text(wsct);
	});
	
	var menuBtn=$('.nextpage_ul>li');
	var menuA=$('.nextpage_ul>li>a');
	menuBtn.click(function(){
		var thBtn=$(this);
		var i=thBtn.index();
		
		if(i == 1){
		$("html, body").stop().animate({scrollTop:950},700);
		menuA.removeClass('on');
		menuA.eq(1).addClass('on');
		return false;
		}else if(i == 2){
		$("html, body").stop().animate({scrollTop:1900},700);
		menuA.removeClass('on');
		menuA.eq(2).addClass('on');
		return false;
		}else{
		$("html, body").stop().animate({scrollTop:0},700);
		menuA.removeClass('on');
		menuA.eq(0).addClass('on');
			
		}
	});
	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
	
		if (scroll>0 && scroll<800) {
			$('.nextpage_ul li a').removeClass('on');
			$('.nextpage_ul li a').eq(0).addClass('on');
		} else if (scroll>=800 && scroll<1700) {
			$('.nextpage_ul li a').removeClass('on');
			$('.nextpage_ul li a').eq(1).addClass('on');		
		} else if (scroll>=1700 && scroll<3000) {
			$('.nextpage_ul li a').removeClass('on');
			$('.nextpage_ul li a').eq(2).addClass('on');		
		};
	});
});











