$(document).ready(function() {
	
	/*$("legend").each(function() {
		var text = $(this).text();
		text = text.replace("a", "ADD");
		$(this).text(text);
	});*/
	
	//$('#menu h3:first').css('background', 'none');
	
	$('.sideBarDepartmentNavigator .menu-departamento .brandFilter').appendTo('#sideBar #brandsList');
	
	//esconde os elementos do .sub antes do footer
	$(".sub:eq(1)").css( "display" , "none" );
	
	$('.departamento .pager.top').first().appendTo('.departamento .sub');
	
	// Barra suspensa superior
	$('#carrinho-barra').hide();
	$(window).scroll(function(){
		if($(window).scrollTop() < 20){
			$('#carrinho-barra').slideUp('fast');
		}else{
			$('#carrinho-barra').slideDown('fast');
		}
	});
	$('#carrinho-barra .seta').click(function(){
		$('#carrinho-barra *').fadeOut(350);
		$('#carrinho-barra').animate({"top": "-=35px"}, 500, 'linear' ,function(){
			$('#carrinho-barra .seta2 *').fadeIn(350);
			$('#carrinho-barra .seta2').slideDown(300);
		});
	});
	//$('#carrinho-barra select')
	$('#carrinho-barra .seta2').click(function(){
		$('#carrinho-barra .seta2').fadeOut(250);
		$('#carrinho-barra').animate({"top": "+=35px"}, 500, 'linear' ,function(){
			$('#carrinho-barra :not(.seta2,script,legend,label,select)').fadeIn('slow');
			$('#carrinho-barra #carrinho #menu2').hide();
		});
	});
	$('.hideCarrinhoMenu').click(function(){
		$('#carrinho-barra #carrinho #menu2').slideToggle('slow');
	});
		
	$(document).ajaxComplete(function(event,request, settings){
		//centraliza o pager bottom no centro
		var pagerWd = $(".pager.bottom").width() / 2;
		var pagesWd = $(".pager.bottom .pages").width() / 2;
		var margin  = pagerWd - pagesWd;
		
		$(".pager.bottom .pages").css( "margin-left" , margin );
		
		
		/* add gPlus */
        $( ".box-gPlus" ).html('<g:plusone></g:plusone>');
        
        
        /* add pinterest*/    
    	var imgSrcPin = $('.apresentacao #image img').attr('src');
    	var domainPin = document.domain;
    	
    	var imgPin = domainPin + imgSrcPin
    	var locationPin = window.location
    	
    	$( ".box-pinterest" ).html('<a href="http://pinterest.com/pin/create/button/?url='+locationPin+'&media=http://'+imgPin+'" class="pin-it-button" count-layout="horizontal"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>');
		
		/* tabs da página do produto */
		var abas = $( "#tabs li" ),
			aba1 = $( "#tabs li:eq(0)" ),
			aba2 = $( "#tabs li:eq(1)" ),
			aba3 = $( "#tabs li:eq(2)" ),
			aba4 = $( "#tabs li:eq(3)" ),
			
			tabs = $( ".tabs .tab" ),
			tab1 = $( ".tabs #tab-1" ),
			tab2 = $( ".tabs #tab-2" ),
			tab3 = $( ".tabs #tab-3" );
			tab4 = $( ".tabs #tab-4" );
			
		
		abas.click( function(){
			abas.removeClass( "active" );
			$( this ).addClass( "active" );
		});
		
		aba1.click( function(){
			tabs.removeClass( "active" );
			tab1.addClass( "active" );
		});
		
		aba2.click( function(){
			tabs.removeClass( "active" );
			tab2.addClass( "active" );
		});
		
		aba3.click( function(){
			tabs.removeClass( "active" );
			tab3.addClass( "active" );
		});
		
		aba4.click( function(){
			tabs.removeClass( "active" );
			tab4.addClass( "active" );
		});
	});
	
	$('#search_cart, #cart, #conta, .searchWrapper:first').wrapAll('<div id="header_carrinho"></div>');
	
	$('.produto .productReference').prependTo('.produto .descricao-preco');
	
});