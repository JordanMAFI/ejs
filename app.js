var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    let data = [
        {
        name: "burt lannister",
        age: 56,
        hobbies: ['reading', 'polo']
        },
        {
        name: "tobe nwige",
        age: 27,
        hobbies: ['writing', 'pressing flowers']},
        {
        name: "miguel atwood",
        age: undefined,
        hobbies: ['music', 'mediation']
        },
        {
        name: "hieu ngyen",
        age: 33,
        hobbies: undefined
        },
        {
        name: undefined,
        age: undefined,
        hobbies: undefined
        }
        ]
        res.render('pages/index', {
            data: data
        });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');