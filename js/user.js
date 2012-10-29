$(document).ready(function() {
	$('<form action="http://www4.directtalk.com.br/chat/?idd=77A3000609E89002219B&origem=StarPoint" method="post" target="janela" id="auto">').appendTo('#header #contact')
	$('head').append('<link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" type="text/css" />')
	
	if ($('#bgSite img').length > 0){
		$('#bgLoja').css('background', 'url(/arquivos/ponto.png) repeat top center');
	};
	
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
	$('.header ul #barra_info.barratop').prependTo('body');
	
	$('.mainContentWrapper .history').prependTo('.footer #containerFooter');
	$('#menu01').appendTo('#header');
	
	$('.login .footer').appendTo('body.login');
	$('.cadastro-cliente .mainContentWrapper div.content #mainContent').removeClass('content');
	
	$('body.checkout.forma-pagamento .footer').appendTo('body.checkout.forma-pagamento');
	
	$('.minha-conta .nav, .minha-conta .content, .minha-conta #ctl00_Conteudo_52.area-3-2').wrapAll('<div id="tabela_login"></div>');
	$('.minha-conta .abas').prependTo('#tabela_login');
	
	$('<div id="tabela_login"><ul class="abas"><li class="meu-perfil"><a href="/Vitrine/MinhaConta/MinhaConta.aspx" title="Meu Perfil">Meu Perfil</a></li><li class="meus-pedidos ativo"><a title="Meus Pedidos">Meus Pedidos</a></li><li class="listas"><a href="/lista/" title="Meus Pedidos">Listas</a></li></ul><div class="nav"><div class="sideBarItem linkList"><h2>Meu perfil</h2><ul><li><a title="Meu Perfil" href="/Vitrine/MinhaConta/MinhaConta.aspx">Meu Perfil</a></li><li><a title="Editar dados" href="/Site/cadastroCliente.aspx">Editar dados</a></li><li><a title="Alterar senha" href="/site/AlterarSenha.aspx">Alterar senha</a></li></ul></div><div class="sideBarItem linkList"><h2>Meus Endereços</h2><ul><li><a title="Catálogo de Endereços" href="/Site/Endereco.aspx">Catálogo de Endereços</a></li></ul></div><div class="sideBarItem linkList"><h2>Listas</h2><ul class="menu"><li><a href="/lista/">Buscar uma Lista</a></li><li><a href="/lista/criar/">Criar nova Lista</a></li><li><a href="/lista/gerenciar/">Gerenciar minhas Listas</a></li></ul></div></div><div id="content"></div></div>').insertAfter('.meus-pedidos-detalhes .mainContentWrapper #ctl00_TopBar_TopBar2_outerHeader');
	$('.meus-pedidos-detalhes .content').appendTo('#content');
	$('.meus-pedidos-detalhes .dados-entrega').appendTo('.meus-pedidos-detalhes .informacoes-entrega');
	$('.meus-pedidos-detalhes .box-dados-pedido .descricao-entrega').appendTo('.meus-pedidos-detalhes .informacoes-entrega');
	$('.meus-pedidos-detalhes #ctl00_Conteudo_controleDadosPagamento_fieldsetDadosPagamento').appendTo('.meus-pedidos-detalhes .informacoes-entrega');
	$('.meus-pedidos-detalhes .box-dados-pedido .descricao-compra').appendTo('.meus-pedidos-detalhes .content');
	
	$('.listas .nav, .listas #content, .lstas .nav, .lstas #content').wrapAll('<div id="tabela_login"></div>');
	$('.listas .abas').prependTo('#tabela_login');
	$('.lstas .abas').prependTo('#tabela_login');
	
	$('.minha-conta #tabela_login .abas li').last().css({ "background" : "none", "margin-right" : "0", "padding-right" : "0" });
	$('.listas #tabela_login .abas li').last().css({ "background" : "none", "margin-right" : "0", "padding-right" : "0" });
	
	$("body.minha-conta .informacoes-conta dd a").last().addClass('senha');
	
	$("body.editar-conta fieldset div.grp").first().addClass('apelido');
	
});

$(document).ajaxStop(function(){
	$('.carrinho .continuar-comprando a').attr('href', '/');
	$('.menu-novidades > a').attr('href', '/busca/?fq=H:136');
	$('.menu-outlet > a').attr('href', '/busca/?fq=H:135');

});
