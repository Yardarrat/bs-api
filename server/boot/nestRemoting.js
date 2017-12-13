'use strict';

module.exports = function(app) {
	app.models.Account.nestRemoting('workHours');
};
