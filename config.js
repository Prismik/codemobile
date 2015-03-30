(function($, self) {
	self.init = function() {
		self.avIndex = 0;
		self.decIndex = 0;
		self.avatars = [];
		self.decors = [];
		for (var i = 0; i != 5; i++) {
			self.avatars[i] = new Image();
			self.avatars[i].id = 'avatar';
			self.avatars[i].src = 'av' + i + '.png';
			if (i <= 2) {
				self.decors[i] = new Image();
				self.decors[i].src = 'dec' + i + '.png';
			}
		}

		$('#avat-left').click(function() {
			self.avIndex = (self.avIndex - 1) % 5;
			if (self.avIndex == -1)
				self.avIndex = 4;

			$('#avatImg').attr('src', 'av' + self.avIndex + '.png');
		});

		$('#avat-right').click(function() {
			self.avIndex = (self.avIndex + 1) % 5;
			if (self.avIndex == -1)
				self.avIndex = 4;

			$('#avatImg').attr('src', 'av' + self.avIndex + '.png');
		});

		$('#decor-left').click(function() {
			self.decIndex = (self.decIndex - 1) % 3;
			if (self.decIndex == -1)
				self.decIndex = 2;

			$('#decImg').attr('src', 'dec' + self.decIndex + '.png');
		});

		$('#decor-right').click(function() {
			self.decIndex = (self.decIndex + 1) % 3;
			if (self.decIndex == -1)
				self.decIndex = 2;

			$('#decImg').attr('src', 'dec' + self.decIndex + '.png');
		});
	};

	self.avatar = function() {
		return self.avatars[self.avIndex];
	};

	self.decor = function() {
		return self.decors[self.decIndex];
	};
})(jQuery, this.Config = { });