

$(function(){
	"use strict";
	var mySlider = $(".bxslider");
	$(".header").height($(window).height());
	$(window).resize(function(){
		$(".header").height($(window).height());
		mySlider.each(function(){
		$(this).css("paddingTop" , ($(window).height() - $(".bxslider li").height() ) /2);
	});
	});
	mySlider.each(function(){
		$(this).css("paddingTop" , ($(window).height() - $(".bxslider li").height() ) /2);
	});
	 mySlider.bxSlider({
	 	pager:false
	 });
	 // smooth scroll 
	 $(".links li a ").on("click" , function(){
	 	$("html , body").animate({
	 		scrollTop: $("#" + $(this).data('value')).offset().top
	 	},1250);
	 });
    // nice scroll 
    

	$(".item").each(function(){
	 	$(this).children().css("margin-right" , "9px");
	 }); 
	// Auto Slider 
	(function autoSlider(){
		$(".slider .active").each(function(){
			if(!$(this).is(":last-child")){
				$(this).delay(6000).fadeOut(3000 , function(){
					$(this).removeClass("active").next().addClass("active").fadeIn();
					autoSlider();
				});
			}else {
				$(this).delay(6000).fadeOut(3000, function(){
					$(this).removeClass("active");
					$(".slider div").eq(0).addClass("active").fadeIn();
					autoSlider();
				});
			}
		});
	}());
	// MixItUp
	$("#container").mixItUp();
    //nice scroll 
        $("html").niceScroll();
});

