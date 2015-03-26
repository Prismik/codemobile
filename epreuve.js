(function($, self) {
	self.init = function(name, operations) {
		self.attempts = 0;
		self.algo = [];
		self.speed = 1000;
		self.name = name;
		self.operations = operations;
	};

	self.play = function() {
		for (var i = 0; i != algo.length; i++) {
			setTimeout(function() {
				var temp = self.algo[i];
				temp['action'](temp['val']);
			}, self.speed);
		}

		self.attempts++;
	};

	self.add = function(func) {
		self.algo.push({'action': func, 'val': 0});
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
})(jQuery, this.Epreuve = { });