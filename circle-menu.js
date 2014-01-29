(function($){
	$.fn.circle_menu = function(options){
		var settings = $.extend({
			angle_initial: -70,
			angle_increment:60,
			radius:90
		}, options);
		var flag_click = false;		
		var angle = (settings.angle_initial*Math.PI)/180;
		var angle_increment = (settings.angle_increment*Math.PI)/180;
		var icon_central = $(this).children("span");
		var icon_circle = $(this).children("li");
		icon_central.on("click",function(){
			// $("#teste li").addClass('ativo');	
			if(!flag_click){
				angle_aux = angle;				
				radius = settings.radius
				flag_click = true;				
			} else {
				radius = 0;
				flag_click = false;
			}			
			icon_circle.each(function(){
				left = radius*Math.cos(angle_aux);
				bottom =radius*Math.sin(angle_aux);		
				$(this).animate({'left':left,'bottom':bottom},{duration:500});
				angle_aux+=angle_increment;			
			})
		})
	}
}(jQuery));