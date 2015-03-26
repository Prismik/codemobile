$(document).on('pageinit','#splash', function() {
	setTimeout(function() {
		$.mobile.navigate( '#main' );
	}, 1000);
});

$(document).ready(function() {
	Config.init();
});