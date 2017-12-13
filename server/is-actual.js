'use strict';

var server = require('./server');
var ds = server.dataSources.db;
var tables = ['workHour', 'Account'];
ds.isActual(tables, function(err, actual) {
  if (!actual) {
    ds.autoupdate(tables, function(err, result) {
      if (err) throw err;
	  console.log('Custom tables updated');
	  ds.disconnect();
    });
  }
});