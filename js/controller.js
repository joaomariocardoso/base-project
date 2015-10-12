//INCLUIR ABAIXO TODOS OS TRIGERS DO PROJETO

//target="_blank" para links completos
$(function() {
	$('a[href^=http]').click( function() {
		window.open(this.href);
			return false;
	});
});