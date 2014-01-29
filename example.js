$(window).ready(function(){
	jQuery('#menu').circle_menu();
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