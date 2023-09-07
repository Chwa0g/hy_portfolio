$(function(){
	
	/* $( window ).resize(function() {
		//창크기 변화 감지
		location.reload(); //창을 새로고침하는 함수. 
	}); */
	
	/* $(window).on('resize', function() {
		this.location.href = this.location.href;
	}); */
	
	
	
	
	var han01= $('.han01');
	var han02= $('.han02');
	var han03= $('.han03');
	var han04= $('.han04');
	var han05= $('.han05');
	var han06= $('.han06');
	var han07= $('.han07');
	var han08= $('.han08');
	var han09= $('.han09');
	var han10= $('.han10');
	var han11= $('.han11');
	var han12= $('.han12');
	var han13= $('.han13');
	var han14= $('.han14');
	var han15= $('.han15');
	var han16= $('.han16');
	var han17= $('.han17');
	var han18= $('.han18');
	var han19= $('.han19');
	var han20= $('.han20');
	var han21= $('.han21');
	var han22= $('.han22');
	var han23= $('.han23');
	
	
	$(window).scroll(function(){
		var wsct=$(window).scrollTop();
		$('#scroll').text(wsct);
		var a=1;
		a++;
		var aw=wsct+a;
		var op=0.005;
		var p=op*wsct/10;
		
		if(wsct>=0 && 300 >= wsct){
			han01.css({top:50+wsct/3+aw});
			han01.css({left:50+wsct/6+aw/15});
			han01.css('transform','scale('+aw/200+')');
			han01.css({opacity:1-p});
			
			han02.css({top:900});
			han02.css({left:535});
			han02.css({opacity:0});
			
			han03.css({top:5});
			han03.css({left:800});
			han03.css({opacity:0});
			
			han04.css({top:700});
			han04.css({left:995});
			han04.css({opacity:0});
			
			han05.css({top:805-wsct/15+aw*0.85});
			han05.css({left:525+aw*0.065});
			han05.css('transform','scale('+aw/200+')');
			han05.css({opacity:1-p});
			
			han06.css({opacity:1});
			han07.css({opacity:1});
			han06.css({top:450+wsct});
			han07.css({top:450+wsct});
			han14.css({top:360+wsct});
			han14.css({opacity:0});
			han15.css({top:350+wsct});
			han15.css({opacity:0});
			
			
			han08.css({top:700+wsct-aw*0.23});
			han08.css({left:1700-aw*0.6});
			han08.css('transform','scale('+aw/200+')');
			han08.css({opacity:1-p});
			
			han09.css({top:5});
			han09.css({left:1100});
			han09.css({opacity:0});
			
			han10.css({top:500});
			han10.css({left:275});
			han10.css({opacity:0});
			
			han11.css({top:100+wsct+aw*0.3});
			han11.css({left:1800-aw*0.55});
			han11.css('transform','scale('+aw/200+')');
			han11.css({opacity:1-p});
			
			han12.css({top:500});
			han12.css({left:2300});
			han12.css({opacity:0});
			
			han13.css({top:1100});
			han13.css({left:900});
			han13.css({opacity:0});
			
		}else if(wsct>=301 && 600 >= wsct){
			han01.css({top:50+wsct/3+aw});
			han01.css({left:50+wsct/6+aw/15});
			han01.css('transform','scale('+aw/200+')');
			han01.css({opacity:1-p});
			
			han02.css({top:900-wsct*0.4+aw*1.04});
			han02.css({left:535-wsct*0.6+aw*0.51});
			han02.css('transform','scale('+aw/200+')');
			han02.css({opacity:1-p});
			
			han03.css({top:5});
			han03.css({left:800});
			han03.css({opacity:0});
			
			han04.css({top:700});
			han04.css({left:995});
			han04.css({opacity:0});
			
			han05.css({top:805-wsct/15+aw*0.85});
			han05.css({left:525+aw*0.065});
			han05.css('transform','scale('+aw/200+')');
			han05.css({opacity:1-p});
			
			han06.css({opacity:1});
			han07.css({opacity:1});
			han06.css({top:450+wsct});
			han07.css({top:450+wsct});
			han14.css({top:360+wsct});
			han14.css({opacity:0});
			han15.css({top:350+wsct});
			han15.css({opacity:0});
			
			
			han08.css({top:700+wsct-aw*0.23});
			han08.css({left:1700-aw*0.6});
			han08.css('transform','scale('+aw/200+')');
			han08.css({opacity:1-p});
			
			han09.css({top:5+wsct+aw*0.41});
			han09.css({left:1100-aw*0.078});
			han09.css('transform','scale('+aw/220+')');
			han09.css({opacity:1-p});
			
			han10.css({top:500+wsct+aw*0.02});
			han10.css({left:275+aw*0.7});
			han10.css('transform','scale('+aw/200+')');
			han10.css({opacity:1-p});
			
			han11.css({top:100+wsct+aw*0.3});
			han11.css({left:1800-aw*0.55});
			han11.css('transform','scale('+aw/200+')');
			han11.css({opacity:1-p});
			
			han12.css({top:500});
			han12.css({left:2300});
			han12.css({opacity:0});
			
			han13.css({top:1100+wsct-aw*0.6});
			han13.css({left:900+aw*0.3});
			han13.css('transform','scale('+aw/200+')');
			han13.css({opacity:1-p});
			
		}else if(wsct>=601 && 900 >= wsct){
			han01.css({top:50+wsct/3+aw});
			han01.css({left:50+wsct/6+aw/15});
			han01.css('transform','scale('+aw/200+')');
			han01.css({opacity:1-p});
			
			han02.css({top:900-wsct*0.4+aw*1.04});
			han02.css({left:535-wsct*0.6+aw*0.51});
			han02.css('transform','scale('+aw/200+')');
			han02.css({opacity:1-p});
			
			han03.css({top:5+wsct+aw*0.35});
			han03.css({left:800-wsct*0.5+aw*0.28});
			han03.css('transform','scale('+aw/200+')');
			han03.css({opacity:1-p});
			
			han04.css({top:700-wsct*0.4+aw*1.18});
			han04.css({left:995-wsct*0.52+aw*0.22});
			han04.css('transform','scale('+aw/200+')');
			han04.css({opacity:1-p});
			
			
			han05.css({top:805-wsct/15+aw*0.85});
			han05.css({left:525+aw*0.065});
			han05.css('transform','scale('+aw/200+')');
			han05.css({opacity:1-p});
			
			han06.css({opacity:1});
			han07.css({opacity:1});
			han06.css({top:450+wsct});
			han07.css({top:450+wsct});
			han14.css({top:360+wsct});
			han14.css({opacity:0});
			han15.css({top:350+wsct});
			han15.css({opacity:0});
			
			
			han08.css({top:700+wsct-aw*0.23});
			han08.css({left:1700-aw*0.6});
			han08.css('transform','scale('+aw/200+')');
			han08.css({opacity:1-p});
			
			han09.css({top:5+wsct+aw*0.41});
			han09.css({left:1100-aw*0.078});
			han09.css('transform','scale('+aw/200+')');
			han09.css({opacity:1-p});
			
			han10.css({top:500+wsct+aw*0.02});
			han10.css({left:275+aw*0.7});
			han10.css('transform','scale('+aw/220+')');
			han10.css({opacity:1-p});
			
			han11.css({top:100+wsct+aw*0.3});
			han11.css({left:1800-aw*0.55});
			han11.css('transform','scale('+aw/200+')');
			han11.css({opacity:1-p});
			
			han12.css({top:500+wsct-aw*0.05});
			han12.css({left:2300-aw*0.9});
			han12.css('transform','scale('+aw/200+')');
			han12.css({opacity:1-p});
			
			han13.css({top:1100+wsct-aw*0.6});
			han13.css({left:900+aw*0.3});
			han13.css('transform','scale('+aw/200+')');
			han13.css({opacity:1-p});
			
		}else if(wsct>=901 && 1200 >= wsct){
			
			han01.css({top:50+wsct/3+aw});
			han01.css({left:50+wsct/6+aw/15});
			han01.css('transform','scale('+aw/200+')');
			han01.css({opacity:1-p*1.8});
			
			han02.css({top:900-wsct*0.4+aw*1.04});
			han02.css({left:535-wsct*0.6+aw*0.51});
			han02.css('transform','scale('+aw/200+')');
			han02.css({opacity:1-p*1.8});
			
			han03.css({top:5+wsct+aw*0.35});
			han03.css({left:800-wsct*0.5+aw*0.28});
			han03.css('transform','scale('+aw/200+')');
			han03.css({opacity:1-p*1.8});
			
			han04.css({top:700-wsct*0.4+aw*1.18});
			han04.css({left:995-wsct*0.52+aw*0.22});
			han04.css('transform','scale('+aw/200+')');
			han04.css({opacity:1-p*1.8});
			
			han05.css({top:805-wsct/15+aw*0.85});
			han05.css({left:525+aw*0.065});
			han05.css('transform','scale('+aw/200+')');
			han05.css({opacity:1-p*1.8});
			
			var ct=0.002*(wsct-1000)
			
			han06.css({opacity:1});
			han07.css({opacity:1});
			han06.css({top:450+wsct});
			han07.css({top:450+wsct});
			han14.css({top:360+wsct});
			han14.css({opacity:ct});
			han15.css({top:350+wsct});
			han15.css({opacity:ct});
			
			
			han08.css({top:700+wsct-aw*0.23});
			han08.css({left:1700-aw*0.6});
			han08.css('transform','scale('+aw/200+')');
			han08.css({opacity:1-p*1.8});
			
			han09.css({top:5+wsct+aw*0.41});
			han09.css({left:1100-aw*0.078});
			han09.css('transform','scale('+aw/220+')');
			han09.css({opacity:1-p*1.8});
			
			han10.css({top:500+wsct+aw*0.02});
			han10.css({left:275+aw*0.7});
			han10.css('transform','scale('+aw/200+')');
			han10.css({opacity:1-p*1.8});
			
			han11.css({top:100+wsct+aw*0.3});
			han11.css({left:1800-aw*0.55});
			han11.css('transform','scale('+aw/200+')');
			han11.css({opacity:1-p*1.8});
			
			han12.css({top:500+wsct-aw*0.05});
			han12.css({left:2300-aw*0.9});
			han12.css('transform','scale('+aw/200+')');
			han12.css({opacity:1-p*1.8});
			
			han13.css({top:1100+wsct-aw*0.6});
			han13.css({left:900+aw*0.3});
			han13.css('transform','scale('+aw/200+')');
			han13.css({opacity:1-p*1.8});
			
		}else if(wsct>=1201 && 1700 >= wsct){
			
			var ct=0.002*(wsct-1000)
			
			han06.css({opacity:1});
			han07.css({opacity:1});
			han06.css({top:450+wsct});
			han07.css({top:450+wsct});
			han14.css({top:360+wsct});
			han14.css({opacity:ct});
			han15.css({top:350+wsct});
			han15.css({opacity:ct});
			
		}else if(wsct>=1701 && 2000 >= wsct){
			
			var ct=0.002*(wsct-1000)
			
			han06.css({opacity:1});
			han07.css({opacity:1});
			han06.css({top:450+wsct});
			han07.css({top:450+wsct});
			han14.css({top:360+wsct});
			han14.css({opacity:ct});
			han15.css({top:350+wsct});
			han15.css({opacity:ct});
			
		}else if(wsct>=2001 && 2300 >= wsct){
			
			han14.css({opacity:1});
			han15.css({opacity:1});
			han20.css({opacity:0});
			
		}else if(wsct>=2301 && 3000 >= wsct){
			han06.css({top:150+wsct});
			han07.css({top:150+wsct});
			han14.css({top:60+wsct});
			han15.css({top:50+wsct});
			han06.css({opacity:1});
			han07.css({opacity:1});
			han14.css({opacity:1});
			han15.css({opacity:1});
			han16.css({opacity:0});
			han17.css({opacity:0});
			han18.css({opacity:0});
			han19.css({opacity:0});
			han20.css({opacity:0});
			
			
			var ctt=0.005*(wsct-2300);
			han20.css({top:500+wsct});
			han20.css({opacity:ctt});
			
		}else if(wsct>=3001 && 3300 >= wsct){
			han06.css({top:150+wsct});
			han07.css({top:150+wsct});
			han14.css({top:60+wsct});
			han15.css({top:50+wsct});
			han06.css({opacity:1});
			han07.css({opacity:1});
			han14.css({opacity:1});
			han15.css({opacity:1});
			han17.css({opacity:0});
			han18.css({opacity:0});
			han19.css({opacity:0});
			
			var ctt=0.005*(wsct-2300);
			han20.css({top:500+wsct});
			han20.css({opacity:ctt});
			
			han16.css({top:600+wsct-aw*0.053});
			han16.css({left:325-wsct*0.02});
			han16.css({opacity:0+p*0.85});
			
		}else if(wsct>=3300 && 3600 >= wsct){
			han06.css({top:150+wsct});
			han07.css({top:150+wsct});
			han14.css({top:60+wsct});
			han15.css({top:50+wsct});
			han16.css({top:420+wsct});
			han06.css({opacity:1});
			han07.css({opacity:1});
			han14.css({opacity:1});
			han15.css({opacity:1});
			han16.css({opacity:1});
			han18.css({opacity:0});
			han19.css({opacity:0});
			han20.css({opacity:1});
			
			han20.css({top:500+wsct});
			
			han17.css({top:400+wsct+aw*0.005});
			han17.css({left:475-wsct*0.02});
			han17.css({opacity:0+p*0.85});
			
			
		}else if(wsct>=3601 && 3900 >= wsct){
			han06.css({top:150+wsct});
			han07.css({top:150+wsct});
			han14.css({top:60+wsct});
			han15.css({top:50+wsct});
			han16.css({top:420+wsct});
			han17.css({top:420+wsct});
			han06.css({opacity:1});
			han07.css({opacity:1});
			han14.css({opacity:1});
			han15.css({opacity:1});
			han16.css({opacity:1});
			han17.css({opacity:1});
			han19.css({opacity:0});
			han20.css({opacity:1});
			
			han20.css({top:500+wsct});
			
			han18.css({top:600+wsct-aw*0.047});
			han18.css({left:625-wsct*0.02});
			han18.css({opacity:0+p*0.85});
			
		}else if(wsct>=3901 && 4200 >= wsct){
			han06.css({top:150+wsct});
			han07.css({top:150+wsct});
			han14.css({top:60+wsct});
			han15.css({top:50+wsct});
			han16.css({top:420+wsct});
			han17.css({top:420+wsct});
			han18.css({top:420+wsct});
			han06.css({opacity:1});
			han07.css({opacity:1});
			han14.css({opacity:1});
			han15.css({opacity:1});
			han16.css({opacity:1});
			han17.css({opacity:1});
			han18.css({opacity:1});
			han20.css({opacity:1});
			
			han20.css({top:500+wsct});
			
			han19.css({top:400+wsct+aw*0.005});
			han19.css({left:775-wsct*0.02});
			han19.css({opacity:0+p*0.85});
			
		}else if(wsct>=4201 && 6480 >= wsct){
			han06.css({top:150+wsct});
			han07.css({top:150+wsct});
			han14.css({top:60+wsct});
			han15.css({top:50+wsct});
			han16.css({top:420+wsct});
			han17.css({top:420+wsct});
			han18.css({top:420+wsct});
			han19.css({top:420+wsct});
			han06.css({opacity:1});
			han07.css({opacity:1});
			han14.css({opacity:1});
			han15.css({opacity:1});
			han16.css({opacity:1});
			han17.css({opacity:1});
			han18.css({opacity:1});
			han19.css({opacity:1});
			han20.css({opacity:1});
			
			han20.css({top:500+wsct});
		}else if(wsct>=6481 && 7200 >= wsct){
			han14.css({top:60+wsct});
			han15.css({top:50+wsct});
			han16.css({top:420+wsct});
			han17.css({top:420+wsct});
			han06.css({opacity:0});
			han07.css({opacity:0});
			han14.css({opacity:1});
			han15.css({opacity:1});
			han16.css({opacity:1});
			han17.css({opacity:1});
			han18.css({opacity:0});
			han19.css({opacity:0});
			han20.css({opacity:0});
			
		}else if(wsct>=7201 && 8000 >= wsct){
			var mop= 40/(wsct-7200);
			
			han14.css({top:60+wsct});
			han15.css({top:50+wsct});
			han16.css({top:420+wsct});
			han17.css({top:420+wsct});
			han14.css({opacity:mop});
			han15.css({opacity:mop});
			han16.css({opacity:mop});
			han17.css({opacity:mop});
			han06.css({opacity:0});
			han07.css({opacity:0});
			han18.css({opacity:0});
			han19.css({opacity:0});
			han20.css({opacity:0});
		}else{
			han14.css({opacity:0});
			han15.css({opacity:0});
			han16.css({opacity:0});
			han17.css({opacity:0});
			han06.css({opacity:0});
			han07.css({opacity:0});
			han18.css({opacity:0});
			han19.css({opacity:0});
			han20.css({opacity:0});
		};
 	});
	
	
	$(window).scroll(function(){
		var sctw=$(window).scrollTop();
		var opa=0.0002;
		var opaa=sctw*opa;
		var opaaa=(sctw-4200)*0.001;
		
		if(sctw>=0 && 4200 >= sctw){
			$('#clock1').css('transform','rotate('+sctw/6+'deg)'); 
			$('#clock1').css({top:100+sctw});
			$('#clock1').css({opacity:opaa});
			$('#clock2').css('transform','rotate('+sctw+'deg)'); 
			$('#clock2').css({top:100+sctw}); 
			$('#clock2').css({opacity:opaa});
			
			$('#clock3').css({top:495+sctw}); 
			$('#clock3').css({opacity:opaa});
			
			$('#clock4').css({top:50+sctw}); 
			$('#clock4').css({opacity:0});
			
		}else if(sctw>=4201 && 6480 >= sctw){
			$('#clock1').css('transform','rotate('+sctw/6+'deg)'); 
			$('#clock1').css({top:100+sctw});
			$('#clock1').css({opacity:opaa});
			$('#clock2').css('transform','rotate('+sctw+'deg)'); 
			$('#clock2').css({top:100+sctw}); 
			$('#clock2').css({opacity:opaa});
			
			$('#clock3').css({top:495+sctw}); 
			$('#clock3').css({opacity:opaa});
			
			$('#clock4').css({top:50+sctw}); 
			$('#clock4').css({opacity:opaaa});
			
		}else if(sctw>=6481 && 7200 >= sctw){
			$('#clock1').css({top:100+sctw});
			$('#clock1').css({opacity:1});
			$('#clock2').css({top:100+sctw}); 
			$('#clock2').css({opacity:1});
			$('#clock1').css('transform','rotate('+0+'deg)'); 
			$('#clock2').css('transform','rotate('+0+'deg)'); 
			
			$('#clock3').css({top:495+sctw}); 
			$('#clock3').css({opacity:1});
			
			$('#clock4').css({top:50+sctw}); 
			$('#clock4').css({opacity:1});
			
			
		}else if(sctw>=7201 && 8000 >= sctw){
			var mopp= 40/(sctw-7200);
			
			$('#clock1').css({top:100+sctw});
			$('#clock1').css({opacity:mopp});
			$('#clock2').css({top:100+sctw}); 
			$('#clock2').css({opacity:mopp});
			$('#clock1').css('transform','rotate('+0+'deg)'); 
			$('#clock2').css('transform','rotate('+0+'deg)'); 
			
			$('#clock3').css({top:495+sctw}); 
			$('#clock3').css({opacity:mopp});
			
			$('#clock4').css({top:50+sctw}); 
			$('#clock4').css({opacity:mopp});
		}else{
			$('#clock1').css({opacity:0});
			$('#clock2').css({opacity:0}); 
			$('#clock3').css({opacity:0});
			$('#clock4').css({opacity:0});
		}
	});
	
	
	
	$(window).scroll(function(){
		var sctw=$(window).scrollTop();
		
		if(sctw>=2000 && 3000 >= sctw){
			
			$('#bg2').css({top:1000-(sctw-1999)});
			$('#bg2').css({opacity:1});
			$('#bg3').css({opacity:0});
			$('#bg4').css({opacity:0});
		}else if(sctw>=3001 && 6480 >= sctw){
			
			$('#bg2').css({top:0});
			$('#bg2').css({opacity:1});
			$('#bg3').css({opacity:0});
			$('#bg4').css({opacity:0});
		}else if(sctw>=6481 && 7200 >= sctw){
			$('#bg2').css({opacity:0});
			$('#bg3').css({opacity:1});
			$('#bg4').css({opacity:0});
		}else if(sctw>=7201 && 8000 >= sctw){
			var opp=(sctw-7200)*0.002
			$('#bg2').css({opacity:0});
			$('#bg3').css({opacity:1});
			$('#bg4').css({opacity:opp});
		}else if(sctw>=8001 && 9200 >= sctw){
			$('#bg3').css({opacity:1});
			$('#bg4').css({opacity:1});
		}else{
			$('#bg2').css({opacity:0});
			$('#bg3').css({opacity:0});
			$('#bg4').css({opacity:0});
			
		}
	});
	
	
	$(window).scroll(function(){
		var sctw=$(window).scrollTop();
		var a=1;
		
		if(sctw>=8300 && 8600 >= sctw){
			var opa=(sctw-8300)*0.004
			
			$('#ham').css({opacity:opa});
			$('#ham').css({top:-100+(sctw-8300)*2.3});
			
			$('#text').css({display:'block'});
			$('#text').css({opacity:0});
		}else if(sctw>=8601 && 9200 >= sctw){
			var opaa=(sctw-8600)*0.003
			
			$('#ham').css({opacity:1});
			$('#ham').css({top:590});
			$('#text').css({display:'block'});
			$('#text').css({opacity:opaa});
		}else{
			
			$('#ham').css({opacity:0});
			$('#text').css({display:'none'});
		}
	});
	
	
	$(window).scroll(function(){
		var sctw=$(window).scrollTop();
		var it=$('#imgText');
		
		if(sctw>=0 && 8000 >= sctw){
			han21.css({opacity:0});
			han22.css({opacity:0});
			han23.css({opacity:0});
			han21.css({top:200+sctw});
			han22.css({top:450+sctw});
			han23.css({top:700+sctw});
			
			it.css({display:'none'});
		}else if(sctw>=8001 && 8300 >= sctw){
			han21.css({top:200+sctw});
			han21.css({opacity:0.5});
			han22.css({top:450+sctw});
			han22.css({opacity:0});
			han23.css({top:700+sctw});
			han23.css({opacity:0});
			
			it.css({display:'none'});
		}else if(sctw>=8301 && 8600 >= sctw){
			han21.css({top:200+sctw});
			han21.css({opacity:1});
			han22.css({top:450+sctw});
			han22.css({opacity:0.5});
			han23.css({top:700+sctw});
			han23.css({opacity:0});
			
			it.css({display:'none'});
		}else if(sctw>=8601 && 8900 >= sctw){
			han21.css({top:200+sctw});
			han21.css({opacity:1});
			han22.css({top:450+sctw});
			han22.css({opacity:1});
			han23.css({top:700+sctw});
			han23.css({opacity:0.5});
			
			it.css({display:'block'});
			it.css({top:120});
			it.css({opacity:0.5});
		}else if(sctw>=8901 && 9200 >= sctw){
			han21.css({top:200+sctw});
			han21.css({opacity:1});
			han22.css({top:450+sctw});
			han22.css({opacity:1});
			han23.css({top:700+sctw});
			han23.css({opacity:1});
			
			it.css({display:'block'});
			it.css({top:120});
			it.css({opacity:1});
		}else{
			han21.css({opacity:0});
			han22.css({opacity:0});
			han23.css({opacity:0});
			it.css({display:'none'});
		}
	});
	
	/* /////////////////////menu click////////////////////// */
	var menuBtn=$('#gnb>ul>li');
	var menuA=$('#gnb>ul>li>a');
	menuBtn.click(function(){
		var thBtn=$(this);
		var i=thBtn.index();
		
		if(i == 1){
		$("html, body").stop().animate({scrollTop:2000},2000);
		menuA.removeClass('on');
		menuA.eq(1).addClass('on');
		return false;
		}else if(i == 2){
		$("html, body").stop().animate({scrollTop:4016},2000);
		menuA.removeClass('on');
		menuA.eq(2).addClass('on');
		return false;
		}else if(i == 3){
		$("html, body").stop().animate({scrollTop:9034},3000);
		menuA.removeClass('on');
		menuA.eq(3).addClass('on');
		return false;
		}else{
		$("html, body").stop().animate({scrollTop:0},2000);
		menuA.removeClass('on');
		menuA.eq(0).addClass('on');
			
		}
	})
	$(window).on('scroll',function(){

		var scroll = $(window).scrollTop();
		var gnba=$('#gnb ul li a');
		if (scroll>0 && scroll<1500) {
			gnba.removeClass();
			gnba.eq(0).addClass('on');
		} else if (scroll>=1500 && scroll<2400) {
			gnba.removeClass();
			gnba.eq(1).addClass('on');		
		} else if (scroll>=2400 && scroll<6480) {
			gnba.removeClass();
			gnba.eq(2).addClass('on');		
		} else if (scroll>=6480 && scroll<9200) {
			gnba.removeClass();
			gnba.eq(3).addClass('on');	
		} 
	});
	/* /////////////////////menu click////////////////////// */
	
	
	
	
	
	$('body').on("mousewheel", function(e){ 
		var ab=$(window).scrollTop();
		var detail=e.originalEvent.detail;
		var delta=e.originalEvent.detail*(-30);
		
		if(e.originalEvent.wheelDelta < 0 ) { 
		//scroll down 
			$('html, body').stop().animate({ scrollTop : '+=2000px' },{duration:1500, ease:'easeOutCubic'}); 
		}else { 
		//scroll up 
			$('html, body').stop().animate({ scrollTop : '-=2000px' },{duration:1500, ease:'easeOutCubic'}); 
		} //prevent page fom scrolling 
		return false; 
	});  
	
	$('body').on("DOMMouseScroll", function(e){ 
		var ab=$(window).scrollTop();
		var detail=e.originalEvent.detail;
		var delta=e.originalEvent.detail*(-30);
		
		if(delta < 0 ) { 
		//scroll down 
			$('html, body').stop().animate({ scrollTop : '+=2000px' },{duration:1500, ease:'easeOutCubic'}); 
		}else { 
		//scroll up 
			$('html, body').stop().animate({ scrollTop : '-=2000px' },{duration:1500, ease:'easeOutCubic'}); 
		} //prevent page fom scrolling 
		return false; 
	}); 
});












