'use strict';

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomText(words) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < words; i++) {
    var word = "";
    for (var j = 0; j < randomInt(3, 10); j++) {
      word += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    text += word+" ";
  }

  return text;
}


var server = require('./server');
var ds = server.dataSources.db;
var tables = 'workHour';
ds.automigrate(tables, function(er) {
  if (er) throw er;
 
  var arr = [];
  for (var i=0; i<500; i++) {
    var d = randomDate(new Date(2012, 0, 1), new Date());
    var h = randomInt(1,20)*15;
    var m = randomInt(1,30);
    var t = randomText(randomInt(5,28));
    var o = randomInt(1,45);

    var item = {"date":d,"duration":h,"profileId":m,"description":t, "accountId":o};
    arr.push(item);
  }

  //console.log(arr);

  server.models.workHour.create(arr, function(err, workHours) {
    if (err) throw err;

    console.log('Models created: \n', workHours);
  });
});





/*

'use strict';

module.exports = function(app) {
  app.dataSources.db.automigrate('workHour', function(err) {
    if (err) throw err;

    var arr = [];
    for (var i=0; i<500; i++) {
      var d = randomDate(new Date(2012, 0, 1), new Date());
      var h = randomInt(1,20)*15;
      var m = randomInt(1,30);
      var t = randomText(randomInt(5,28));

      var item = {"date":d,"duration":h,"profileId":m,"description":t};
      arr.push(item);
    }

    //console.log(arr);

    app.models.workHour.create(arr, function(err, workHours) {
      if (err) throw err;

      console.log('Models created: \n', workHours);
    });
  });
};

*/