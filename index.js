var express = require('express');
var routes = require('./routes');

var app = express();

app.use(express.static('public'));
app.use('/', routes);
//view engine setup
app.set('views', 'views');
app.set('view engine', 'pug');

app.listen(3000, function(){
    console.log("Listening on port 3000!")
});

app.get('/', function (req, res) {
    // res.send('Hello World');
    res.sendFile('index.html')
}); 

app.get('/hello', function (req, res) {
    const body = {
        title: "this is title",
        message: "this is message"
    }
    res.render('hello', body)
}); 

