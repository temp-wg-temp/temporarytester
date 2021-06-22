$(document).ready(function(){
	$("header .outer__header--wrap .right__header--menu .menu__button--wrap").on("click" ,function(e){
		if ($(this).hasClass("active__menu")) {
			$(this).removeClass("active__menu");
			$("body, html").css("overflow-y" , "auto");
			$(this).closest(".outer__header--wrap").find(".right__header--wrap").fadeOut(400);
			$(this).find("span:nth-child(1)").css({"transform" : "rotate(0deg)" , "top" : "0px"});
			$(this).find("span:nth-child(2)").css("opacity" ,"1");
			$(this).find("span:nth-child(3)").css({"transform" : "rotate(0deg)" , "top" : "0px"});
		} else {
			$('html').animate({ scrollTop: $("header").offset().top}, 500  );
			$("body ,html").css("overflow-y" , "hidden");
			$(this).addClass("active__menu");
			$(this).closest(".outer__header--wrap").find(".right__header--wrap").fadeIn(400);
			$(this).find("span:nth-child(1)").css({"transform" : "rotate(45deg)" , "top" : "8px"});
			$(this).find("span:nth-child(2)").css("opacity" ,"0");
			$(this).find("span:nth-child(3)").css({"transform" : "rotate(-45deg)" , "top" : "-8px"});
		}
	});

	$(".terms__privacy--wrap .outer__termsblock .left__switcher--terms ul li a").on("click" ,function(e){
		e.preventDefault();
		if (!$(this).parent().hasClass("active__switcher--terms")) {
			$(this).closest(".left__switcher--terms").find("ul>li").removeClass("active__switcher--terms");
			$(this).parent().addClass("active__switcher--terms");
			$(this).closest(".outer__termsblock").find(".right__content--terms>.elem__of--document").css("display" , "none");
			$(this).closest(".outer__termsblock").find(".right__content--terms>." + $(this).attr("data-elem") +"").fadeIn(250);
		}
	});	


	$(".foq__block--main .outer__foq .elem__foq .head__foq").on("click" ,function(e){
		var currElem = $(this);
		if ($(this).hasClass("opened__foq")) {
			$(this).removeClass("opened__foq");
			$(this).parent().find(".content__foq").slideUp(500);
			$(this).find("span").css("transform" , "rotate(0deg)");
			setTimeout(function(){
				$(currElem).css("padding-bottom" , "35px");
				$(currElem).parent().css("padding-bottom" ,  "0px");
			},  500);
		} else {
			$(this).find("span").css("transform" , "rotate(180deg)");
			$(this).addClass("opened__foq");
			$(this).css("padding-bottom" , "0px");
			$(this).parent().find(".content__foq").slideDown(500);
			$(this).parent().css("padding-bottom" ,  "35px");
		}
	});
});