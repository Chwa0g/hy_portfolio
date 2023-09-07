$(function(){
	$('.logo').hover(function(){
		$('.header_box').css({transform:'none', top:0, height: 100, background:'rgba(255,255,255,0.7)'});
	},function(){
		$('.header_box').css({background: 'rgba(255,255,255,1)', height: 300, transform:'skewY(-40deg)', top:-820});
	});
	
	$('.header_box').hover(function(){
		$('.header_box').css({transform:'none', top:0, height: 100, background:'rgba(255,255,255,0.7)'});
	},function(){
		$('.header_box').css({background: 'rgba(255,255,255,1)', height: 300, transform:'skewY(-40deg)', top:-820});
	});
	
	$('.megong a').click(function(){
		var tg=$(this);
		$('.megong a').removeClass('active');
		tg.addClass('active');
		$('.lgq701').attr('src',tg.attr('value'));
		$(".loadvideo").load();
		document.getElementById(".loadvideo").play();
		return false;
	});
	
	var a=1;
	$('.more').click(function(){
		
		if(a>0){
			$('.more_bg').css({left:0, top:-400});
			$('.more i').removeClass('fa-bars');
			$('.more i').addClass('fa-times');
			$('.more_box').stop().fadeIn('slow');
			a= a - 1;
		}else{
			$('.more_bg').css({left:-1920, top:1920});
			$('.more i').removeClass('fa-times');
			$('.more i').addClass('fa-bars');
			$('.more_box').stop().hide();
			a= a + 1;
		}
	});
	
	$('.vot0').click(function(){
		$('.volumebg').css({transform:'rotate(0deg)'});
		$('.volbg01').css({height:0, top:170});
		$('.volbg02').css({width: 0});
		$('.volbg03').css({height: 0});
		$('.more_view01').css({height:0,transition: 'all 0.8s'});
		$('.more_view02').css({height:0,transition: 'all 0.8s'});
		$('.more_view03').css({height:0,transition: 'all 0.8s'});
	});
	$('.vot01').click(function(){
		$('.volbg01').css({height:140, top:30});
		$('.volumebg').css({transform:'rotate(90deg)'});
		$('.volbg02').css({width: 0});
		$('.volbg03').css({height: 0});
		$('.more_view01').css({height: 1000,transition: 'all 0.8s'});
		$('.more_view02').css({height:0,transition: 'all 0.8s'});
		$('.more_view03').css({height:0,transition: 'all 0.8s'});
	});
	$('.vot02').click(function(){
		$('.volbg01').css({height:140, top:30});
		$('.volbg02').css({width: 160});
		$('.volbg03').css({height: 0});
		$('.volumebg').css({transform:'rotate(191deg)'});
		$('.more_view01').css({height:0,transition: 'all 0.8s'});
		$('.more_view02').css({height: 1000,transition: 'all 0.8s'});
		$('.more_view03').css({height:0,transition: 'all 0.8s'});
	});
	$('.vot03').click(function(){
		$('.volbg01').css({height:140, top:30});
		$('.volbg02').css({width: 160});
		$('.volbg03').css({height: 140});
		$('.volumebg').css({transform:'rotate(270deg)'});
		$('.more_view01').css({height:0,transition: 'all 0.8s'});
		$('.more_view02').css({height:0,transition: 'all 0.8s'});
		$('.more_view03').css({height: 1000,transition: 'all 0.8s'});
	});
	
	$(function(){
		var btn=$('.volt_btn a');
		var bg=$('.volt_box>div');
		
		btn.click(function(){
			var tg=$(this);
			var i=tg.index();
			
			btn.removeClass('von');
			tg.addClass('von');
			volt(i);
			return false;
		}); 
		function volt(i){
			var bi=bg.eq(i);
			
			bg.fadeOut();
			bi.fadeIn();
		}
	});
});













