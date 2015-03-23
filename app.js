var avIndex = 0;
var decIndex = 0;
var avatars = [];
var decors = [];

$(document).on('pageinit','#splash', function() {
	setTimeout(function() {
		$.mobile.navigate( '#main' );
	}, 1000);
});

$(document).ready(function() {
	for (var i = 0; i != 5; i++) {
		avatars[i] = new Image();
		avatars[i].src = 'av' + i + '.png';
		if (i <= 2) {
			decors[i] = new Image();
			decors[i].src = 'dec' + i + '.png';
		}
	}

	$('#avat-left').click(function() {
		avIndex = (avIndex - 1) % 5;
		if (avIndex == -1)
			avIndex = 4;

		$('#avatImg').attr('src', 'av' + avIndex + '.png');
	});

	$('#avat-right').click(function() {
		avIndex = (avIndex + 1) % 5;
		if (avIndex == -1)
			avIndex = 4;

		$('#avatImg').attr('src', 'av' + avIndex + '.png');
	});

	$('#decor-left').click(function() {
		decIndex = (decIndex - 1) % 3;
		if (decIndex == -1)
			decIndex = 2;

		$('#decImg').attr('src', 'dec' + decIndex + '.png');
	});

	$('#decor-right').click(function() {
		decIndex = (decIndex + 1) % 3;
		if (decIndex == -1)
			decIndex = 2;

		$('#decImg').attr('src', 'dec' + decIndex + '.png');
	});
});