/*var menuOutObject;
var menuOutTimer;
$(function() {
	$('#menu div > h3').hover(
		function() {
			menuOutObject = $(this).next();
			y = $(this).offset().left;
			menuOutObject.css('left', y-641);
		
			if (!menuOutObject.is(':visible')) {
				hideMenuSubItems($('#menu ul:visible'));
			}
			clearTimeout(menuOutTimer);
			menuOutObject.fadeIn();
		},
		function() {
			menuOutTimer = setTimeout(function() {
				hideMenuSubItems(menuOutObject);
			}, 10);
		}
	);
	
	$('#menu div > ul').hover(
		function() {
			menuOutObject = $(this);
			clearTimeout(menuOutTimer);
		},
		function() {
			menuOutTimer = setTimeout(function() {
				hideMenuSubItems(menuOutObject);
			}, 10);
		}
	);
});

function hideMenuSubItems(o) {
	o.fadeOut(10);
}*/

$(document).ready(function() {
    
    $("#menu > div h3").each(function(){
        if($(this).next("ul").length > 0){
            $(this).append($(this).next("ul"));
        }
        else{
            $(this).addClass("hoverMenu");
        }
    });
    
	$('#menu h3').each(function(){
		$(this).after('<span class="separator"></span>');
	});
	
	$("#menu h3 > a").each(function(){
		$(this).clone().insertAfter(this);
		$(this).next('a').addClass('fx');
	});
	
	/*$('#menu div > span').last().remove();*/
	$('#menu h3.outlet').last().next('span').remove();
    
});