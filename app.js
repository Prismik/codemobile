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
});