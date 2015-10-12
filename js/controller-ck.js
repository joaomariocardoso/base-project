// INCLUIR NESTE ESPAÇO TODOS OS IMPORTS JS VIA CODEKIT

//@codekit-prepend "jquery-1.9.1.min.js";
//@codekit-prepend "bootstrap-button.js";




//INCLUIR ABAIXO TODOS OS TRIGERS DO PROJETO

//target="_blank" para links completos
$(function() {
	$('a[href^=http]').click( function() {
		window.open(this.href);
			return false;
	});
});