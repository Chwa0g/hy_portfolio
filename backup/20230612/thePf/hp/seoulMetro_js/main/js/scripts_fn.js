$.fn.rollover=function(options){
	options=$.extend({
		off: '_1',
		on: '_2'
	}, options);
	this.each(function(){
		var a=$(this);
		var img=a.find('img');
		var src_off=img.attr('src');
		var src_on=src_off.replace(options.off,options.on);
		a.hover(function(){
			img.attr('src',src_on);
		},function(){
			img.attr('src',src_off);
		});
	});
	return this
}
