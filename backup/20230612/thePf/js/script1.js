$(function(){
	/* /////////////////////////////////////////////////////////////port1///////////////////////////////////////////////////////////// */

	$(window).scroll(function(){
	var sct=$(this).scrollTop();
	var infoAbout=$('.about_box').offset().top;
	if (sct>infoAbout-700){
		$('.about_box').stop().animate({height:'850px'},900,'easeOutBack')
		
	} else {
		$('.about_box').stop().animate({height:0},900,'easeOutBack')
		}
	});
	/* /////////////////////////////////////////////////////////////port1///////////////////////////////////////////////////////////// */
	
	/* /////////////////////////////////////////////////////////////port1///////////////////////////////////////////////////////////// */

	$(window).scroll(function(){
	var sct=$(this).scrollTop();
	var infoTop01=$('.port01').offset().top;
	if (sct>infoTop01-500){
		$('.port01_txtBox').stop().animate({left:0},900,'easeOutBack')
		$('.port01 .port01_imgBox').stop().animate({right:0},900,'easeOutBack')
		
	} else {
		$('.port01_txtBox').stop().animate({left:'-400px'},900,'easeOutBack')
		$('.port01 .port01_imgBox').stop().animate({right:'-600px'},900,'easeOutBack')
		}
	});
	/* /////////////////////////////////////////////////////////////port1///////////////////////////////////////////////////////////// */
	
	/* /////////////////////////////////////////////////////////////port2///////////////////////////////////////////////////////////// */
	$(window).scroll(function(){
	var sct=$(this).scrollTop();
	var infoTop02=$('.port02').offset().top;
	
	if (sct>infoTop02-500){
		$('.port02_txtBox').stop().animate({right:0},900,'easeOutBack')
		$('.port02 .port02_imgBox').stop().animate({left:0},900,'easeOutBack')
		
	} else {
		$('.port02_txtBox').stop().animate({right:'-400px'},900,'easeOutBack')
		$('.port02 .port02_imgBox').stop().animate({left:'-600px'},900,'easeOutBack')
		}
	});
	/* /////////////////////////////////////////////////////////////port2///////////////////////////////////////////////////////////// */
	
	/* /////////////////////////////////////////////////////////////port3///////////////////////////////////////////////////////////// */
	$(window).scroll(function(){
	var sct=$(this).scrollTop();
	var infoTop03=$('.port03').offset().top;
	
	if (sct>infoTop03-500){
		$('.port03_txtBox').stop().animate({left:0},900,'easeOutBack')
		$('.port03 .port03_imgBox').stop().animate({right:0},900,'easeOutBack')
		$('.port03_bgTxt').stop().animate({opacity:1},900,'easeOutBack')
		
	} else {
		$('.port03_txtBox').stop().animate({left:'-400px'},900,'easeOutBack')
		$('.port03 .port03_imgBox').stop().animate({right:'-600px'},900,'easeOutBack')
		$('.port03_bgTxt').stop().animate({opacity:0.5},900,'easeOutBack')
		}
	});
	/* /////////////////////////////////////////////////////////////port3///////////////////////////////////////////////////////////// */
	
	/* /////////////////////////////////////////////////////////////port4///////////////////////////////////////////////////////////// */
	$(window).scroll(function(){
	var sct=$(this).scrollTop();
	var infoTop04=$('.port04').offset().top;
	
	if (sct>infoTop04-500){
		$('.port04_txtBox').stop().animate({left:0},900,'easeOutBack')
		$('.port04 .port04_imgBox').stop().animate({right:0},900,'easeOutBack')
		$('.port04_bgTxt').stop().animate({opacity:1},900,'easeOutBack')
		
	} else {
		$('.port04_txtBox').stop().animate({left:'-400px'},900,'easeOutBack')
		$('.port04 .port04_imgBox').stop().animate({right:'-600px'},900,'easeOutBack')
		$('.port04_bgTxt').stop().animate({opacity:0.5},900,'easeOutBack')
		}
	});
	/* /////////////////////////////////////////////////////////////port4///////////////////////////////////////////////////////////// */
	
	/* /////////////////////////////////////////////////////////////port5///////////////////////////////////////////////////////////// */
	$(window).scroll(function(){
	var sct=$(this).scrollTop();
	var infoTop05=$('.port05').offset().top;
	
	if (sct>infoTop05-500){
		$('.port05_txtBox').stop().animate({right:0},900,'easeOutBack')
		$('.port05 .port05_imgBox').stop().animate({left:0},900,'easeOutBack')
		
	} else {
		$('.port05_txtBox').stop().animate({right:'-400px'},900,'easeOutBack')
		$('.port05 .port05_imgBox').stop().animate({left:'-600px'},900,'easeOutBack')
		}
	});
	/* /////////////////////////////////////////////////////////////port5///////////////////////////////////////////////////////////// */
	
	/* /////////////////////////////////////////////////////////////port6///////////////////////////////////////////////////////////// */
	$(window).scroll(function(){
	var sct=$(this).scrollTop();
	var infoTop06=$('.port06').offset().top;
	
	if (sct>infoTop06-500){
		$('.port06_txtBox').stop().animate({left:0},900,'easeOutBack')
		$('.port06 .port06_imgBox').stop().animate({right:0},900,'easeOutBack')
		$('.port06_bgTxt').stop().animate({opacity:1},900,'easeOutBack')
		
	} else {
		$('.port06_txtBox').stop().animate({left:'-400px'},900,'easeOutBack')
		$('.port06 .port06_imgBox').stop().animate({right:'-600px'},900,'easeOutBack')
		$('.port06_bgTxt').stop().animate({opacity:0.5},900,'easeOutBack')
		}
	});
	/* /////////////////////////////////////////////////////////////port6///////////////////////////////////////////////////////////// */
	
	
	
	/* /////////////////////menu down////////////////////// */
		
	$(window).scroll(function(){
	var sct=$(this).scrollTop();
	$('#scroll').text(sct);

	if (sct>10){
		$('#gnb').addClass('on');
		} else {
		$('#gnb').removeClass('on');
		}
	});
	
	/* /////////////////////menu down////////////////////// */
	
	/* /////////////////////menu click////////////////////// */
	var menuBtn=$('.menu>ul>li');
	var menuA=$('.menu>ul>li>a');
	menuBtn.click(function(){
		var thBtn=$(this);
		var i=thBtn.index();
		
		if(i == 1){
		$("html, body").stop().animate({scrollTop:900},1000);
		menuA.removeClass('on');
		menuA.eq(1).addClass('on');
		return false;
		}else if(i == 2){
		$("html, body").stop().animate({scrollTop:2120},1000);
		menuA.removeClass('on');
		menuA.eq(2).addClass('on');
		return false;
		}else if(i == 3){
		$("html, body").stop().animate({scrollTop:2900},1000);
		menuA.removeClass('on');
		menuA.eq(3).addClass('on');
		return false;
		}else if(i == 4){
		$("html, body").stop().animate({scrollTop:3700},1000);
		menuA.removeClass('on');
		menuA.eq(4).addClass('on');
		return false;
		}else if(i == 5){
		$("html, body").stop().animate({scrollTop:4600},1000);
		menuA.removeClass('on');
		menuA.eq(5).addClass('on');
		return false;
		}else if(i == 6){
		$("html, body").stop().animate({scrollTop:5350},1000);
		menuA.removeClass('on');
		menuA.eq(6).addClass('on');
		return false;
		}else if(i == 7){
		$("html, body").stop().animate({scrollTop:6120},1000);
		menuA.removeClass('on');
		menuA.eq(7).addClass('on');
		return false;
		}else{
		$("html, body").stop().animate({scrollTop:0},1000);
		menuA.removeClass('on');
		menuA.eq(0).addClass('on');
			
		}
	})
	
	$(window).on('scroll',function(){

		var scroll = $(window).scrollTop();
	
		if (scroll>0 && scroll<800) {
			$('.menu li a').removeClass();
			$('.menu li a').eq(0).addClass('on');
		} else if (scroll>=800 && scroll<2120) {
			$('.menu li a').removeClass();
			$('.menu li a').eq(1).addClass('on');		
		} else if (scroll>=2120 && scroll<2750) {
			$('.menu li a').removeClass();
			$('.menu li a').eq(2).addClass('on');		
		} else if (scroll>=2750 && scroll<3500) {
			$('.menu li a').removeClass();
			$('.menu li a').eq(3).addClass('on');	
		} else if (scroll>=3500 && scroll<4500) {
			$('.menu li a').removeClass();
			$('.menu li a').eq(4).addClass('on');	
		} else if (scroll>=4500 && scroll<5250) {
			$('.menu li a').removeClass();
			$('.menu li a').eq(5).addClass('on');	
		} else if (scroll>=5250 && scroll<6000) {
			$('.menu li a').removeClass();
			$('.menu li a').eq(6).addClass('on');	
		} else if (scroll>=6000 && scroll<10000) {
			$('.menu li a').removeClass();
			$('.menu li a').eq(7).addClass('on');	
		}
		
	});
	/* /////////////////////menu click////////////////////// */
	
	/* /////////////////////i,ex click////////////////////// */
	var port01btn1=$('.port01_btn1>a');
	var port01btn2=$('.port01_btn2>a');
	port01btn1.click(function(){
		$('.port01_txt').fadeIn();
		$('.port01_txtt').fadeOut();
		$('.port01_btn1').addClass('onbtn');
		$('.port01_btn2').removeClass('onbtn');
		return false;
	});
	port01btn2.click(function(){
		$('.port01_txtt').fadeIn();
		$('.port01_txt').fadeOut();
		$('.port01_btn2').addClass('onbtn');
		$('.port01_btn1').removeClass('onbtn');
		return false;
	});
	var port02btn1=$('.port02_btn1>a');
	var port02btn2=$('.port02_btn2>a');
	port02btn1.click(function(){
		$('.port02_txt').fadeIn();
		$('.port02_txtt').fadeOut();
		$('.port02_btn1').addClass('onbtn');
		$('.port02_btn2').removeClass('onbtn');
		return false;
	});
	port02btn2.click(function(){
		$('.port02_txtt').fadeIn();
		$('.port02_txt').fadeOut();
		$('.port02_btn2').addClass('onbtn');
		$('.port02_btn1').removeClass('onbtn');
		return false;
	});
	var port03btn1=$('.port03_btn1>a');
	var port03btn2=$('.port03_btn2>a');
	port03btn1.click(function(){
		$('.port03_txt').fadeIn();
		$('.port03_txtt').fadeOut();
		$('.port03_btn1').addClass('onbtn1');
		$('.port03_btn2').removeClass('onbtn1');
		return false;
	});
	port03btn2.click(function(){
		$('.port03_txtt').fadeIn();
		$('.port03_txt').fadeOut();
		$('.port03_btn2').addClass('onbtn1');
		$('.port03_btn1').removeClass('onbtn1');
		return false;
	});
	var port04btn1=$('.port04_btn1>a');
	var port04btn2=$('.port04_btn2>a');
	port04btn1.click(function(){
		$('.port04_txt').fadeIn();
		$('.port04_txtt').fadeOut();
		$('.port04_btn1').addClass('onbtn');
		$('.port04_btn2').removeClass('onbtn');
		return false;
	});
	port04btn2.click(function(){
		$('.port04_txtt').fadeIn();
		$('.port04_txt').fadeOut();
		$('.port04_btn2').addClass('onbtn');
		$('.port04_btn1').removeClass('onbtn');
		return false;
	});
	
	
	var port05btn1=$('.port05_btn1>a');
	var port05btn2=$('.port05_btn2>a');
	port05btn1.click(function(){
		$('.port05_txt').fadeIn();
		$('.port05_txtt').fadeOut();
		$('.port05_btn1').addClass('onbtn');
		$('.port05_btn2').removeClass('onbtn');
		return false;
	});
	port05btn2.click(function(){
		$('.port05_txtt').fadeIn();
		$('.port05_txt').fadeOut();
		$('.port05_btn2').addClass('onbtn');
		$('.port05_btn1').removeClass('onbtn');
		return false;
	});
	var port06btn1=$('.port06_btn1>a');
	var port06btn2=$('.port06_btn2>a');
	port06btn1.click(function(){
		$('.port06_txt').fadeIn();
		$('.port06_txtt').fadeOut();
		$('.port06_btn1').addClass('onbtn1');
		$('.port06_btn2').removeClass('onbtn1');
		return false;
	});
	port06btn2.click(function(){
		$('.port06_txtt').fadeIn();
		$('.port06_txt').fadeOut();
		$('.port06_btn2').addClass('onbtn1');
		$('.port06_btn1').removeClass('onbtn1');
		return false;
	});
	/* /////////////////////i,ex click////////////////////// */
	
	/* /////////////////////ex ver8 cross browsing////////////////////// */
	
	$('.port03_img01_1').hover(function(){
		$(this).stop().animate({'backgroundPositionY':-1196},900);
	},function(){
		$(this).stop().animate({'backgroundPositionY':0},500);
	});
	$('.port03_img02_1').hover(function(){
		$(this).stop().animate({'backgroundPositionY':-1094},900);
	},function(){
		$(this).stop().animate({'backgroundPositionY':0},500);
	});
	$('.port03_img03_1').hover(function(){
		$(this).stop().animate({'backgroundPositionY':-435},900);
	},function(){
		$(this).stop().animate({'backgroundPositionY':0},500);
	});
	
	$('.port01 .port01_imgBox .port01_img').hover(function(){
		$(this).children('a').css({opacity:0.8});
		$(this).children('a').stop().fadeIn();
	},function(){
		$(this).children('a').stop().fadeOut();
	});
	
	$('.port02 .port02_imgBox .port02_img').hover(function(){
		$(this).children('a').css({opacity:0.8});
		$(this).children('a').stop().fadeIn();
	},function(){
		$(this).children('a').stop().fadeOut();
	});
	
	$('.port04 .port04_imgBox .port04_img').hover(function(){
		$(this).children('a').css({opacity:0.8});
		$(this).children('a').stop().fadeIn();
	},function(){
		$(this).children('a').stop().fadeOut();
	});
	
	$('.port05 .port05_imgBox .port05_img').hover(function(){
		$(this).children('a').css({opacity:0.8});
		$(this).children('a').stop().fadeIn();
	},function(){
		$(this).children('a').stop().fadeOut();
	});
	
	$('.port06 .port06_imgBox .port06_img').hover(function(){
		$(this).children('a').css({opacity:0.8});
		$(this).children('a').stop().fadeIn();
	},function(){
		$(this).children('a').stop().fadeOut();
	});
	
	/* /////////////////////ex ver8 cross browsing////////////////////// */
	
});