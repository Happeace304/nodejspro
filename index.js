var express = require('express');
var app = express();

app.use(express.static('public'));

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

