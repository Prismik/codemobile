(function($, self) {
	self.init = function(name, operations, avatar, decor) {
		self.attempts = 0;
		self.algo = [];
		self.speed = 1000;
		self.name = name;
		self.operations = operations;
		self.isFinish = false;
		self.player = {"x" : 1, "y" : 1, "angle" : 0, "avatar" : avatar}

		for (var i = 0; i < (self.operations.length || 0); ++i)
			$("#operations").append("<option value=" + i + ">" + self.operations[i].name + "</option>");

		$("#operations").change(function() {
			$("#operationLabel").text(self.operations[$("#operations").val()].label);
		});

		$("#addButton").on("click", self.add);
		$("#playButton").on("click", self.play);

		// Hardcoded board
		for (var i = 1; i <= 4; ++i)
			for (var j = 1; j <= 4; ++j)
				$('#r' + i + 'c' + j).attr("src", "tiles/desertRoadTile.png");

		$('#r1c1').parent().append(self.player.avatar);
		$('#r1c2').attr("src", "tiles/desertBlockTile.png");
		$('#r2c2').attr("src", "tiles/desertBlockTile.png");
		$('#r3c2').attr("src", "tiles/desertBlockTile.png");
		$('#r1c4').attr("src", "tiles/goal.png");
		$('#r2c4').attr("src", "tiles/desertBlockTile.png");
		$('#r3c4').attr("src", "tiles/desertBlockTile.png");
		$('#r4c4').attr("src", "tiles/desertBlockTile.png");

	};

	self.play = function() {
		self.isFinish = false;

		var i = 0;
		var executeStep = function executeStep() {
			var temp = self.algo[i];
			self[temp['action']](temp['val']);

			if (i == self.algo.length) {
				alert("Recommencez, vous n'avez pas atteint l'objectif.");
				self.resetAnimation();
			}
			else if (i < self.algo.length && !self.isFinish) {
				++i;
				setTimeout(executeStep, self.speed);
			}

		}

		executeStep();

		self.attempts++;
	};

	self.add = function() {
		self.algo.push({'action': self.operations[$("#operations").val()].name, 'val': $("#operationValue").val()});
		$('#steps').append('<li><a href="#">' + self.operations[$("#operations").val()].name + ' ' 
			+ $("#operationValue").val() + '</a><a href="#"></a></li>');
	};

	self.edit = function(at, val) {
		self.algo[at]['val'] = val;
	};

	self.stop = function() {

	};

	self.swap = function(from, to) {
		var temp = self.algo[to];
		self.algo[to] = self[from];
		self[from] = temp;
	};

	self.avancer = function(nbCases) {
		for (var i = 0; i != nbCases; i++) {
			if (self.player.angle == 0)
				self.player.x += 1;
			else if (self.player.angle == 90)
				self.player.y += 1;
			else if (self.player.angle == 180)
				self.player.x -= 1;
			else if (self.player.angle == 270)
				self.player.y -= 1;

			if (self.isValid(self.player.x, self.player.y))
				$("#r" + self.player.x + "c" + self.player.y).parent().append(self.player.avatar);
			else if (self.isAtGoal(self.player.x, self.player.y)) {
				alert("Bien joue !");
				self.resetAnimation();
			}
			else {
				alert("Recommencez, vous ne pouvez pas avancer de " + nbCases + " dans cette direction!");
				self.resetAnimation();
			}
		}
	};

	self.tourner = function(degres) {
			if (self.player.angle == 0)
				self.player.angle += degres;
			else if (self.player.angle == 90)
				self.player.angle = (self.player.angle + degres) % 360;
			else if (self.player.angle == 180)
				self.player.angle = (self.player.angle + degres) % 360;
			else if (self.player.angle == 270)
				self.player.angle = (self.player.angle + degres) % 360;
			else {
				alert("Recommencez, impossible de tourner de " + degres + " degres.");
				self.resetAnimation();
			}
	};

	self.resetAnimation = function() {
		$("#" + self.player.id).remove();
		$('#r1c1').parent().append(self.player.avatar);
		self.player = {"x" : 1, "y" : 1, "angle" : 0, "avatar" : avatar};
		self.isFinish = true;
	};

	self.isValid = function(x, y) {
		return ($('#r'+ x +'c' + y).length > 0) && ($('#r'+ x +'c' + y).src != "tiles/desertBlockTile.png")
	};

	self.isAtGoal = function(x, y) {
		return ($('#r'+ x +'c' + y).length > 0) && ($('#r'+ x +'c' + y).src == "tiles/goal.png")
	};
})(jQuery, this.Epreuve = { });