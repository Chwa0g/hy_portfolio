


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
			$('.nextpage_ul li a').removeClass();
			$('.nextpage_ul li a').eq(0).addClass('on');
		} else if (scroll>=800 && scroll<1700) {
			$('.nextpage_ul li a').removeClass();
			$('.nextpage_ul li a').eq(1).addClass('on');		
		} else if (scroll>=1700 && scroll<3000) {
			$('.nextpage_ul li a').removeClass();
			$('.nextpage_ul li a').eq(2).addClass('on');		
		};
	});
});