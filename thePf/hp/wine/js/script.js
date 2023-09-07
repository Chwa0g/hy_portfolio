$(function(){
	/* 첫페이지 들어가거나 나올 때 메뉴 보이고 감추기 */
	$(window).scroll(function(){
		var wsct=$(window).scrollTop();
		/* 스크롤 값 텍스트화 */
		$('#scroll').text(wsct);
		
		if(wsct>=500){ // 스크롤 500 이상일 때 메뉴감춤
			$('#header').stop().animate({width: 0},500);
			$('#close').stop().animate({left: 0},500);
			$('#close').addClass('on');
			$('#gnb').stop().animate({opacity:0},100);
		}else if(wsct>=0 && 499>=wsct){ //스크롤 500 이하일 때 메뉴보임
			$('#header').stop().animate({width: '20%'},500);
			$('#close').stop().animate({left: '20%'},500);
			$('#close').removeClass('on');
			$('#gnb').stop().animate({opacity:1},1500);
		}
	});
	
	
	/* 투뎁스 클릭했을 때 슬라이드 다운 */
	$('.twoD').hide();  
	$('.oneD').click(function(){
		var one=$(this);
		var tg=$(this).next();
		$('.twoD').slideUp();
		$('.oneD').removeClass('on');
		if(tg.is(':visible')){
			tg.slideUp();
			one.removeClass('on');
		}else{
			tg.slideDown();
			one.addClass('on');
		};
	
		return false;
	});
	
	/* 왼쪽 전체메뉴 열고닫기 버튼 눌렀을 때 */
	var clo=$('#close');
	var head=$('#header');
	var a=1;
	
	clo.click(function(){
		
		if(a>0){ //보일 때 클릭하면 닫어
			$('#header').stop().animate({width: 0},500);
			$('#close').stop().animate({left: 0},500);
			$('#close').addClass('on');
			$('#gnb').stop().animate({opacity:0},100);
			a= a - 1;
		}else{ //안보일 때 클릭하면 열어
			$('#header').stop().animate({width: '20%'},500);
			$('#close').stop().animate({left: '20%'},500);
			$('#close').removeClass('on');
			$('#gnb').stop().animate({opacity:1},1500);
			a= a + 1;
		}
		return false;
	});
	
	/* 오른쪽 따라오는 퀵페이지 버튼 */
	var qtop=parseInt($('#quick').css('top'));
	$(window).on('scroll',function(){ //현재 탑 값에 스크롤 탑값 더하기
		var sct=$(window).scrollTop();
		$('#quick').stop().animate({top: sct+qtop+'px'},300);
	});
	
	/* /////////////////////quick click////////////////////// */
	var quickA=$('#quick a');
	quickA.click(function(){
		var thBtn=$(this);
		var i=thBtn.index();
		// 퀵메뉴 클릭시 자동 스크롤 및 가상클래스 온오프
		if(i == 1){
		$("html, body").stop().animate({scrollTop:1050},500);
		quickA.removeClass('on');
		quickA.eq(1).addClass('on');
		return false;
		}else if(i == 2){
		$("html, body").stop().animate({scrollTop:2600},500);
		quickA.removeClass('on');
		quickA.eq(2).addClass('on');
		return false;
		}else if(i == 3){
		$("html, body").stop().animate({scrollTop:3650},500);
		quickA.removeClass('on');
		quickA.eq(3).addClass('on');
		return false;
		}else if(i == 4){
		$("html, body").stop().animate({scrollTop:4700},500);
		quickA.removeClass('on');
		quickA.eq(4).addClass('on');
		return false;
		}else if(i == 5){
		$("html, body").stop().animate({scrollTop:4900},500);
		quickA.removeClass('on');
		quickA.eq(5).addClass('on');
		return false;
		}else{
		$("html, body").stop().animate({scrollTop:0},500);
		quickA.removeClass('on');
		quickA.eq(0).addClass('on');
		return false;
		}
	})
	
	$(window).on('scroll',function(){

		var scroll = $(window).scrollTop();
		//스크롤 시 퀵 메뉴 가상클래스 자동 온오프
		if (scroll>0 && scroll<800) {
			quickA.removeClass();
			quickA.eq(0).addClass('on');
		} else if (scroll>=800 && scroll<2350) {
			quickA.removeClass();
			quickA.eq(1).addClass('on');		
		} else if (scroll>=2350 && scroll<3400) {
			quickA.removeClass();
			quickA.eq(2).addClass('on');		
		} else if (scroll>=3400 && scroll<4450) {
			quickA.removeClass();
			quickA.eq(3).addClass('on');		
		} else if (scroll>=4450 && scroll<4840) {
			quickA.removeClass();
			quickA.eq(4).addClass('on');		
		} else if (scroll>=4840 && scroll<7000) {
			quickA.removeClass();
			quickA.eq(5).addClass('on');		
		}
	});
	/* /////////////////////quick click////////////////////// */
	
	
	
	/* /////////////////////image slide////////////////////// */
	$(function(){
		var visual=$('.sec02_bg>div');
		var button=$('.section02 .button>ul>li');
		var current=0;
		var setIntervalId;
		var leftBtn=$('.section02 .left');
		var rightBtn=$('.section02 .right');
		var texts=$('.sec02_text>div');
		
		//버튼 클릭 시 이미지랑 텍스트 바뀜
		button.click(function(){
			var tg=$(this);
			var i=tg.index();
			
			button.removeClass('active');
			tg.addClass('active');
			move(i);
			textt(i);
			return false;
		}); 
		//이미지 버튼으로 넘기기
		function move(i){
			if(current==i){return;}
			
			var currentEl=visual.eq(current);
			var nextEl=visual.eq(i);
			
			currentEl.css({left:0}).stop().animate({left:'-100%'});
			nextEl.css({left:'100%'}).stop().animate({left: 0});
			
			current=i
		}
		//텍스트 버튼으로 넘기기
		function textt(i){
			var ti=texts.eq(i);
			
			texts.stop().animate({opacity:0},1000);
			ti.stop().animate({opacity:1},1000);
			
		}
		// 시간 지나면 넘어가게 하는거
		function timer(){
			setIntervalId=setInterval(function(){
				var prev=visual.eq(current);
				var pn=button.eq(current);
				var pt=texts.eq(current);
				move1(prev,0,'-100%');
				text1(pt,1,0);
				pn.removeClass('active');
				current++;
				if(current==visual.size())
				current=0;
			
				var next=visual.eq(current);
				var pnn=button.eq(current);
				var ptt=texts.eq(current);
				move1(next,'100%',0);
				text1(ptt,0,1);
				pnn.addClass('active');
				
			},7000);
		}
		// 무브1 사용자이벤트 정의
		function move1(tg,start,end){
			tg.css('left',start).stop().animate({left:end},{duration:1000});
		}
		function text1(tg,start,end){
			tg.css('opacity',start).stop().animate({opacity:end},{duration:1000});
		}
		
		timer();
		$('.section02').hover(function(){
			clearInterval(setIntervalId);
		},function(){
			timer();
		});
		//오른쪽 클릭시 이미지랑 텍스트 넘어감
		rightBtn.click(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			var pt=texts.eq(current);
			move1(prev,0,'-100%');
			text1(pt,1,0);
			pn.removeClass('active');
			current++;
			if(current==visual.size())
			current=0;
		
			var next=visual.eq(current);
			var pnn=button.eq(current);
			var ptt=texts.eq(current);
			move1(next,'100%',0);
			text1(ptt,0,1);
			pnn.addClass('active');
			return false;
		});
		//왼쪽 클릭시 이미지랑 텍스트 넘어감
		leftBtn.click(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			var pt=texts.eq(current);
			move1(prev,0,'100%');
			text1(pt,1,0);
			pn.removeClass('active');
			current--;
			if(current==-visual.size())
			current=0;
		
			var next=visual.eq(current);
			var pnn=button.eq(current);
			var ptt=texts.eq(current);
			move1(next,'-100%',0);
			text1(ptt,0,1);
			pnn.addClass('active');
			return false;
		});
	});
	
	/* /////////////////////image slide////////////////////// */
	
	
	
	/* /////////////////////section02 보일땐 보이고 아닐땐 안보이기////////////////////// */
	$(window).scroll(function(){
		var wsct=$(window).scrollTop();
		
		if(wsct>=0 && wsct<2700){
			$('.section02>*').css({display:'block'});
		}else{
			$('.section02>*').css({display:'none'});
		}
	});
	/* /////////////////////section02 보일땐 보이고 아닐땐 안보이기////////////////////// */
	/* /////////////////////section01 보일땐 보이고 아닐땐 안보이기////////////////////// */
	$(window).scroll(function(){
		var wsct=$(window).scrollTop();
		
		if(wsct>=0 && wsct<1100){
			$('.section01>*').css({display:'block'});
		}else{
			$('.section01>*').css({display:'none'});
		}
	});
	/* /////////////////////section01 보일땐 보이고 아닐땐 안보이기////////////////////// */
	
	
	$(function(){
		var btn=$('.sec03_left>ul>li');
		var bg=$('.sec03_menuBg>div');
		var topT=$('.sec03_topTit>div');
		var botT=$('.sec03_botTxt>div');
		
		btn.click(function(){
			var tg=$(this);
			var i=tg.index();
			
			btn.removeClass('on');
			tg.addClass('on');
			chabg(i);
			chatxt(i);
			chabot(i);
			return false;
		}); 
		function chabg(i){
			var bi=bg.eq(i);
			
			bg.fadeOut();
			bi.fadeIn();
		}
		function chatxt(i){
			var ti=topT.eq(i);
			
			topT.fadeOut();
			ti.fadeIn();
		}
		function chabot(i){
			var bti=botT.eq(i);
			
			botT.children('h3').fadeOut();
			botT.children('div').fadeOut();
			bti.children('h3').fadeIn();
		}
	});
	
	$(function(){
		var salBg=$('.s03_saladBg>div');
		var salBga=$('.s03_saladBg>div>a');
		
		salBga.toggle(function(){
			var tg=$(this);
			
			salBg.stop().animate({opacity:0,display:'none'},200);
			tg.css({opacity:1});
			tg.parent().stop().animate({width: '100%', height:'100%', zIndex: 2},500);
			tg.css({opacity:0});
			
		},function(){
			var tg=$(this);
			
			salBg.stop().animate({opacity:1},1000);
			tg.css({opacity:1});
			tg.parent().stop().animate({width: '50%', height:'50%', zIndex:1},500);
			tg.css({opacity:1});
		});
	});
	$(function(){
		var breBg=$('.s03_breadBg>div');
		var breBga=$('.s03_breadBg>div>a');
		
		breBga.toggle(function(){
			var tg=$(this);
			
			breBg.stop().animate({opacity:0},200);
			tg.css({opacity:1});
			tg.parent().stop().animate({width: '100%', height:'100%', zIndex:2},500);
			tg.css({opacity:0});
			
		},function(){
			var tg=$(this);
			
			breBg.stop().animate({opacity:1},1000);
			tg.css({opacity:1});
			tg.parent().stop().animate({width: '50%', height:'50%', zIndex:1},500);
			tg.css({opacity:1});
		});
	});
	
	$(function(){
		var friBg=$('.s03_friedBg>div');
		var friBga=$('.s03_friedBg>div>a');
		
		friBga.toggle(function(){
			var tg=$(this);
			
			friBg.stop().animate({opacity:0},200);
			tg.css({opacity:1});
			tg.parent().stop().animate({width: '100%', height:'100%', zIndex:2},500);
			tg.css({opacity:0});
			
		},function(){
			var tg=$(this);
			
			friBg.stop().animate({opacity:1},1000);
			tg.css({opacity:1});
			tg.parent().stop().animate({width: '50%', height:'50%', zIndex:1},500);
			tg.css({opacity:1});
		});
	});
	
	$(function(){
		var itaBg=$('.s03_italyBg>div');
		var itaBga=$('.s03_italyBg>div>a');
		
		itaBga.toggle(function(){
			var tg=$(this);
			
			itaBg.stop().animate({opacity:0},200);
			tg.css({opacity:1});
			tg.parent().stop().animate({width: '100%', height:'100%', zIndex:2},500);
			tg.css({opacity:0});
			
		},function(){
			var tg=$(this);
			
			itaBg.stop().animate({opacity:1},1000);
			tg.css({opacity:1});
			tg.parent().stop().animate({width: '50%', height:'50%', zIndex:1},500);
			tg.css({opacity:1});
		});
	});
	
	
	$(function(){
		var greBg=$('.s03_greekBg>div');
		var greBga=$('.s03_greekBg>div>a');
		
		greBga.toggle(function(){
			var tg=$(this);
			
			greBg.stop().animate({opacity:0},200);
			tg.css({opacity:1});
			tg.parent().stop().animate({width: '100%', height:'100%', zIndex:2},500);
			tg.css({opacity:0});
			
		},function(){
			var tg=$(this);
			
			greBg.stop().animate({opacity:1},1000);
			tg.css({opacity:1});
			tg.parent().stop().animate({width: '50%', height:'50%', zIndex:1},500);
			tg.css({opacity:1});
		});
	});
	
	$(function(){
		var salBg=$('.s03_saladBg>div');
		var salBga=$('.s03_saladBg>div>a');
		var salt=$('.s03_saladTxt>div');
		var h3=$('.s03_saladTxt>h3');
		
		salBga.toggle(function(){
			var tg=$(this);
			var i=tg.parent().index();
			
			h3.fadeOut();
			salTxt(i);
			return false;
			
		},function(){
			salt.fadeOut();
			h3.fadeIn();
			return false;
		});
		
		function salTxt(i){
			var si=salt.eq(i);
			
			salt.fadeOut();
			si.fadeIn();
		}
	});
	$(function(){
		var breBg=$('.s03_breadBg>div');
		var breBga=$('.s03_breadBg>div>a');
		var bret=$('.s03_breadTxt>div');
		var hh3=$('.s03_breadTxt>h3');
		
		breBga.toggle(function(){
			var tg=$(this);
			var i=tg.parent().index();
			
			hh3.fadeOut();
			breTxt(i);
			return false;
			
		},function(){
			bret.fadeOut();
			hh3.fadeIn();
			return false;
		});
		
		function breTxt(i){
			var si=bret.eq(i);
			
			bret.fadeOut();
			si.fadeIn();
		}
	});
	$(function(){
		var friBg=$('.s03_friedBg>div');
		var friBga=$('.s03_friedBg>div>a');
		var frit=$('.s03_friedTxt>div');
		var h33=$('.s03_friedTxt>h3');
		
		friBga.toggle(function(){
			var tg=$(this);
			var i=tg.parent().index();
			
			h33.fadeOut();
			friTxt(i);
			return false;
			
		},function(){
			frit.fadeOut();
			h33.fadeIn();
			return false;
		});
		
		function friTxt(i){
			var si=frit.eq(i);
			
			frit.fadeOut();
			si.fadeIn();
		}
	});
	
	$(function(){
		var itaBg=$('.s03_italyBg>div');
		var itaBga=$('.s03_italyBg>div>a');
		var itat=$('.s03_italyTxt>div');
		var h33=$('.s03_italyTxt>h3');
		
		itaBga.toggle(function(){
			var tg=$(this);
			var i=tg.parent().index();
			
			h33.fadeOut();
			itaTxt(i);
			return false;
			
		},function(){
			itat.fadeOut();
			h33.fadeIn();
			return false;
		});
		
		function itaTxt(i){
			var si=itat.eq(i);
			
			itat.fadeOut();
			si.fadeIn();
		}
	});
	
	
	$(function(){
		var greBg=$('.s03_greekBg>div');
		var greBga=$('.s03_greekBg>div>a');
		var gret=$('.s03_greekTxt>div');
		var h33=$('.s03_greekTxt>h3');
		
		greBga.toggle(function(){
			var tg=$(this);
			var i=tg.parent().index();
			
			h33.fadeOut();
			greTxt(i);
			return false;
			
		},function(){
			gret.fadeOut();
			h33.fadeIn();
			return false;
		});
		
		function greTxt(i){
			var si=gret.eq(i);
			
			gret.fadeOut();
			si.fadeIn();
		}
	});
	
	var moviing=$('.sec04_bottom');
	function prevv(){
		moviing.find('ul').animate({top:-378},500,
		function(){
			$(this).children('li:first').insertAfter(
			$(this).children('li:last'));
			$(this).css({top:0});
			
		});
	}
	function nextt(){
		moviing.find('li:last').insertBefore(
		moviing.find('li:first'));
		moviing.find('ul').css({top:-378}).animate({top:0},500);
	}
	
	$('.up_btn').click(function(){
		nextt();
		return false;
	});
	$('.down_btn').click(function(){
		prevv();
		return false;
	});
	
	function timmer(){
		setIntervalId01=setInterval(function(){
			moviing.find('ul').animate({top:-378},500,
			function(){
				$(this).children('li:first').insertAfter(
				$(this).children('li:last'));
				$(this).css({top:0});
			});
		},4000);
	};
	timmer();
	
	moviing.hover(function(){
		clearInterval(setIntervalId01);
	},function(){
		timmer();
	});
	$('.updown_btn').hover(function(){
		clearInterval(setIntervalId01);
	},function(){
		timmer();
	});
	
	var secone=$('.shop>ul>li>a');
	secone.click(function(){
		var one=$(this);
		var tg=$(this).next();
		$('.shop>ul>li>ul').slideUp();
		secone.removeClass('onn');
		if(tg.is(':visible')){
			tg.slideUp();
			one.removeClass('onn');
		}else{
			tg.slideDown();
			one.addClass('onn');
		};
	
		return false;
	});
	
	$(window).scroll(function(){
		var wsct=$(window).scrollTop();
		
		if(wsct>=4840){
			$('.footer_box').stop().animate({height: 200},500);
		}else{ 
			$('.footer_box').stop().animate({height: 0},500);
		}
	});
	
	var content=$('#container>div');// content
	var contentInfo=[];//section num
	var totalSize=content.size(); //section
	
	content.on('mousewheel DOMMousewheel',function(event, delta){
		if(delta>0 && $(this).index()>=1){ 
			var prev = $(this).prev().offset().top;
			$('html, body').stop().animate({'scrollTop':prev},800);
				
		}else if(delta<0 && $(this).index()<=totalSize){ 
			var next = $(this).next().offset().top;
			$('html, body').stop().animate({'scrollTop':next},800);
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
});

















