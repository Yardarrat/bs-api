'use strict';

var server = require('./server');
var ds = server.dataSources.db;
var tables = 'Account';
ds.automigrate(tables, function(er) {
  if (er) throw er;
  console.log('Custom tables [' - tables - '] created in ', ds.adapter.name);
  ds.disconnect();
});



//console.log("datasources: ", server.dataSources);
//var tables = ['WorkHour', 'Profile', 'Gender', 'MemberStatus', 'License', 'ProfileLicense', 'Medical', 'ProfileMedical', 'Certificate', 'ProfileCertificate'];
