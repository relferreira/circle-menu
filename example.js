$(window).ready(function(){
	jQuery('.circle-menu').circle_menu({
		angle_initial: -70,
		angle_increment:60,
		radius:90		
	});
	jQuery("#menu").on("click",function(){
		var img = $(this).find("img");
		if(img.attr("class")=="fechar"){
			img.removeClass("fechar");
			img.addClass("abrir");
		}
		else{
			img.removeClass("abrir");
			img.addClass("fechar");
		}
		
	})
})