'use strict';

module.exports = function(app) {
  app.dataSources.db.automigrate('User', function(err) {
    if (err) throw err;

    console.log("checkpoint create-users");

    app.models.User.create([
 {
  "email":"n.g-neubauer@web.de",
  "password":"123456"
 },
 {
  "email":"melanie.beeskow@online.de",
  "password":"123456"
 },
 {
  "email":"dirk.bernhardt@wisag.de",
  "password":"123456"
 },
 {
  "email":"kevinbock87@googlemail.com",
  "password":"123456"
 },
 {
  "email":"daniel.devries@t-online.de",
  "password":"123456"
 },
 {
  "email":"m-ali.d@hotmail.com",
  "password":"123456"
 },
 {
  "email":"d.eder89@gmail.com",
  "password":"123456"
 },
 {
  "email":"eggert.ehmke@ftv-spandau.de",
  "password":"123456"
 },
 {
  "email":"nico.eisenhardt@alice.de",
  "password":"123456"
 },
 {
  "email":"michagraep@mailbox.org",
  "password":"123456"
 },
 {
  "email":"lothar.erich.klein@freenet.de",
  "password":"123456"
 },
 {
  "email":"mike@kemiro.de",
  "password":"123456"
 },
 {
  "email":"ronald@kemiro.de",
  "password":"123456"
 },
 {
  "email":"chris.sammy@gmx.net",
  "password":"123456"
 },
 {
  "email":"lars@krumreynet.de",
  "password":"123456"
 },
 {
  "email":"bkrupke@gmx.de",
  "password":"123456"
 },
 {
  "email":"peterlat@gmx.com",
  "password":"123456"
 },
 {
  "email":"k.meyer@kabelmail.de",
  "password":"123456"
 },
 {
  "email":"bmiosge@googlemail.com",
  "password":"123456"
 },
 {
  "email":"gaby_munzinger@yahoo.de",
  "password":"123456"
 },
 {
  "email":"rgmunzinger@yahoo.de",
  "password":"123456"
 },
 {
  "email":"stephan_vonorlow@web.de",
  "password":"123456"
 },
 {
  "email":"ftv.bernie@e-serviceschlie.de",
  "password":"123456"
 },
 {
  "email":"uwericardo@yahoo.com",
  "password":"123456"
 },
 {
  "email":"zaitec@gmx.de",
  "password":"123456"
 },
 {
  "email":"schweitzerdennis@web.de",
  "password":"123456"
 },
 {
  "email":"mohasshah20@gmail.com",
  "password":"123456"
 },
 {
  "email":"jsiems@posteo.de",
  "password":"123456"
 },
 {
  "email":"r.simross@t-online.de",
  "password":"123456"
 },
 {
  "email":"justinwerdin@gmail.com",
  "password":"123456"
 },
 {
  "email":"harald-wilke@mail.de",
  "password":"123456"
 },
 {
  "email":"witkowskiphilipp@gmail.com",
  "password":"123456"
 },
 {
  "email":"p.asci@web.de",
  "password":"123456"
 },
 {
  "email":"ghpoint@kalib-gmbh.de",
  "password":"123456"
 },
 {
  "email":"ecke.tobias@googlemail.com",
  "password":"123456"
 },
 {
  "email":"jan.hanuschik@web.de",
  "password":"123456"
 },
 {
  "email":"dr.kassner@t-online.de",
  "password":"123456"
 },
 {
  "email":"k.m.lindemann@gmx.de",
  "password":"123456"
 },
 {
  "email":"fabian.wissel@web.de",
  "password":"123456"
 },
 {
  "email":"lars.wellner@yahoo.de",
  "password":"123456"
 },
 {
  "email":"rainer@balzereit.net",
  "password":"123456"
 },
 {
  "email":"guenter.beeskow@online.de",
  "password":"123456"
 },
 {
  "email":"ederwadjt@aol.com",
  "password":"123456"
 },
 {
  "email":"darrelmann@aol.com",
  "password":"123456"
 },
 {
  "email":"agoese@googlemail.com",
  "password":"123456"
 },
 {
  "email":"hoja@gmx.de",
  "password":"123456"
 },
 {
  "email":"richard.kedl@ca.transport.bombardier.com",
  "password":"123456"
 },
 {
  "email":"flauzemis@googlemail.com",
  "password":"123456"
 },
 {
  "email":"ftv@reinhardmuench.de",
  "password":"123456"
 },
 {
  "email":"gp_patzer@web.de",
  "password":"123456"
 },
 {
  "email":"nsiems3@gmail.com",
  "password":"123456"
 },
 {
  "email":"sebastian.stute@gmx.net",
  "password":"123456"
 },
 {
  "email":"tklaus@snafu.de",
  "password":"123456"
 }
], function(err, users) {
      if (err) throw err;

      console.log('Users created: \n', users);
    });
  });
};