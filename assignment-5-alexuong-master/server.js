/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Alexander Uong
 * Email: uonga@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require ('express-handlebars');

var twitdata = require('./twitData');


var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: null}));
app.set('view engine', 'handlebars');


app.use(express.static('public'));


app.get('/', function (req, res) {
	res.status(200).render('twitPage', {numTwits: twitdata});
});

app.get('/twits/:n', function(req, res, next){
	var val = req.params.n;
	var checkVal = Number(val);
	var bool = Number.isInteger(checkVal);

	if (val > twitdata.length -1 || bool == false || val < 0){
		next();
	}

	else{
		res.status(200).render('soloTwit',{ soloTwit: [twitdata[val]],});
	
	}	


});


app.get('*', function (req, res) {
    res.status(404).render('404');


});



app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
