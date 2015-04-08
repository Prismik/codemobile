$(document).on('pageinit','#splash', function() {
	setTimeout(function() {
		$.mobile.navigate( '#main' );
	}, 1000);
});

$(document).ready(function() {
	Config.init();

	var operations = [{ "name" : "avancer", "label" : "Nombre de cases :" },
					  { "name" : "tourner", "label" : "Nombre de degres :", "valeurs" : [90,180,-90] }];
	Epreuve.init("Introduction", operations);
	$('.js-anim').click(function () {
		Epreuve.show();
	});
	$('.more').click(function() {
		$('#more').prepend('<div class="ui-grid-b">' +
			'<div class="ui-block-a">' +
			'<div class="ui-bar ui-bar-a" style="height:60px">' +
			'<a href="#algoPop" data-rel="popup" data-position-to="window" data-transition="pop">Recursion 2</a>' +
			'</div></div><div class="ui-block-b">' +
			'<div class="ui-bar ui-bar-a" style="height:60px">' +
			'<a href="#algoPop" data-rel="popup" data-position-to="window" data-transition="pop">Bouger 3</a>' +
			'</div></div><div class="ui-block-c">' +
			'<div class="ui-bar ui-bar-a" style="height:60px">' +
			'<a href="#algoPop" data-rel="popup" data-position-to="window" data-transition="pop">Boucle 3</a>' +
			'</div></div></div>'
		).trigger("create");
	});
});