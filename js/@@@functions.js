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
$(document).ajaxComplete(function(event,request, settings){
//centraliza o pager bottom no centro
var pagerWd = $(".pager.bottom").width() / 2;
var pagesWd = $(".pager.bottom .pages").width() / 2;
var margin = pagerWd - pagesWd;
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
tab2.addClass( "active" );
});
});
$( ".carrinhoTable .preco-unitario" ).attr( "align" , "center" );
});