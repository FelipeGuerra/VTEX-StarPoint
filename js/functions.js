$(document).ready(function() {

	if($(".produto .buy-button").attr("href") === "javascript:alert('')"){
		$(".produto .buy-button").attr("href", "javascript:alert('Escolha um tamanho.')");
	};
		
	$('<form action="http://www4.directtalk.com.br/chat/?idd=77A3000609E89002219B&origem=StarPoint" method="post" target="janela" id="auto">').appendTo('#header #contact')
	if ($('#bgHotSite img').length > 0){
		$('#bgLoja').css('background', 'url(/arquivos/ponto.png) repeat top center');
	};
	if ($('#bgSite img').length > 0){
		$('#bgLoja').css('background', 'url(/arquivos/ponto.png) repeat top center');
	};
	if($('body').hasClass('produto')){
		var slider = $("div#mySliderTabs").sliderTabs({
			position: "top",
			transitionSpeed: 350
		});
	}
	
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
	$('.categoria .pager.top').first().appendTo('.categoria .sub');
	$('.resultado-busca .pager.top').first().appendTo('.resultado-busca .sub');
	
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
	$('#carrinho-barra #seta2').click(function(){
		$('#carrinho-barra #seta2').fadeOut(250);
		$('#carrinho-barra').animate({"top": "+=35px"}, 500, 'linear' ,function(){
			$('#carrinho-barra :not(#seta2,script,legend,label,select)').fadeIn('slow');
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
	
	if($.browser.msie && parseInt($.browser.version, 10) == 7) {
		//corrige z-index ie7//
		$(function() {
			var zIndexNumber = 1000;
			$('div').each(function() {
				$(this).css('zIndex', zIndexNumber);
				zIndexNumber -= 10;
			});
		});
	}
});

$(document).ajaxStop(function(){
	
	$('.novidades > a').attr('href', '/busca/?fq=H:136');
	$('.outlet > a').attr('href', '/busca/?fq=H:135');
	
	lnkCanonical = $('link[rel="canonical"]').attr('href').split('/');
	bv = lnkCanonical[lnkCanonical.length-1];

	if(bv == "?fq=H:136"){
		$('.resultado-busca #topBanners #bannerNovidades').css('display', 'block');
	}else if (bv == "?fq=H:135"){
		$('.resultado-busca #topBanners #bannerOutlet').css('display', 'block');
	}else{
		$('.resultado-busca #topBanners #bannerNovidades').css('display', 'none');
		$('.resultado-busca #topBanners #bannerOutlet').css('display', 'none');
	};
	
	if($('.container.box.complete_seu_look #wrapSimilares div').length === 0){
	   $('.container.box.complete_seu_look').css('display', 'none');
	};
	
	if($('.container.box.aproveite #divCompreJunto div').length === 0){
	   $('.container.box.aproveite').css('display', 'none');
	};

	$('.produto .bread-crumb a[title="Starpoint"]').text('HOME');
	$('#sideBar.filtro .menu-navegue a.search-navigator-tab').click();

	/*if($('#banner2 #slides ul li').length === 0){
		$('#bannerDefault').show();
	}*/
	
	
	if($('#tab_video iframe').length > 0 ){
		$('.ui-slider-tabs-list li.video a').click();
	}
	
	$('.preco-a-vista').prependTo('.descricao-preco');
	
    $(".brand.---lost").css('background', 'url(/arquivos/lost.gif) no-repeat top center');
});
