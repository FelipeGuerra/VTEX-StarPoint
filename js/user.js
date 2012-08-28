$(document).ready(function() {
	$('head').append('<link href="http://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" type="text/css" />')
	
	$("body.checkout .searchWrapper:last, body.minha-conta .searchWrapper:last, body.fale-conosco .searchWrapper:last, body.sku .searchWrapper:last").addClass('bottomSearchWrapper');
	if ($("body").attr("class") == "carrinho"){
		$("iframe").attr( "scrolling", "no");
		$("iframe").attr( "style", "overflow : hidden; width : 640px; height : 400px;");
		$("iframe").parent().attr( "style", "overflow : visible; width : 640px; height : 400px;");
		$("a.thickbox.tbstarted").click ( function (){
			$("iframe").attr( "scrolling", "no");
			$("iframe").attr( "style", "overflow : hidden; width : 640px; height : 400px;");
			$("iframe").parent().attr( "style", "overflow : visible; width : 640px; height : 400px;");
		});
		if ( $.browser.safari ){
			$("iframe").parent().css({ "width" : "600px", "height" : "400px", "overflow" : "hidden" });
			$("iframe").css({ "width" : "600px", "height" : "450px", "overflow" : "hidden" });
		}
	};
	if ($("body").attr("class") == "checkout"){
		$("iframe").attr( "scrolling", "no");
		$("iframe").attr( "style", "overflow : hidden; width : 640px; height : 400px;");
		$("iframe").parent().attr( "style", "overflow : visible; width : 640px; height : 400px;");
		$("a.thickbox.tbstarted").click ( function (){
			$("iframe").attr( "scrolling", "no");
			$("iframe").attr( "style", "overflow : hidden; width : 640px; height : 400px;");
			$("iframe").parent().attr( "style", "overflow : visible; width : 640px; height : 400px;");
		});
		if ( $.browser.safari ){
			$("iframe").parent().css({ "width" : "600px", "height" : "400px", "overflow" : "hidden" });
			$("iframe").css({ "width" : "600px", "height" : "450px", "overflow" : "hidden" });
		}
	};
	
	$('#search_cart, #cart, #conta, .searchWrapper:first').wrapAll('<div id="header_carrinho"></div>');
	//$('#ctl00_TopBar_TopBar1_ulServicos #barra_info.barratop').prependTo('body');
	$('.header ul #barra_info.barratop').prependTo('body');
	
	$('.mainContentWrapper .history').prependTo('.footer #containerFooter');
	$('#menu01').appendTo('#header');
	
	//$('<div class="barratop" id="barra_info">FRETE GRÁTIS ACIMA DE R$ 199,90* | EM ATÉ 6X SEM JUROS | 5% DE DESCONTO NO BOLETO | 48h PARA ENTREGAS EM CAPITAIS* | 30 DIAS PARA DEVOLUÇÃO GRÁTIS | 1ª TROCA SEM CUSTO*</div>').prependTo('body.login');
	$('.login .footer').appendTo('body.login');
	$('.cadastro-cliente .mainContentWrapper div.content #mainContent').removeClass('content');
	
	//$('<div class="barratop" id="barra_info">FRETE GRÁTIS ACIMA DE R$ 199,90* | EM ATÉ 6X SEM JUROS | 5% DE DESCONTO NO BOLETO | 48h PARA ENTREGAS EM CAPITAIS* | 30 DIAS PARA DEVOLUÇÃO GRÁTIS | 1ª TROCA SEM CUSTO*</div>').prependTo('body.checkout.endereco-compra');
	
	$('body.checkout.forma-pagamento .footer').appendTo('body.checkout.forma-pagamento');
	
});