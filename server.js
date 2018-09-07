var express = require('express');
var stylus = require('stylus');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var env = process.env.NODE_EVN || 'development';

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/server/views');

app.use(bodyParser.urlencoded(
    {
    extended: true
    }
));

app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: function(str, path) {
            return stylus(str).set('filename', path);
        }
    }
));

app.use(express.static(__dirname + '/public'));


mongoose.connect("mongodb://localhost:27017/academycourses", { useNewUrlParser: true });
var db = mongoose.connection;

db.once('open', function (error) {
    if (error) {
        console.log('Database cannot be open: ' + error);
        return;
    }

    console.log('Database up and running...');
});

db.on('error', function (error) {
    console:log('Database error: ' + error);
});

var messageSchema = mongoose.Schema({
    message: String
});

var Message = mongoose.model('Message', messageSchema);

app.get('/partials/:partialArea/:partialName', function(request, response) {
    response.render('partials/' + request.params.partialArea + '/' + request.params.partialName);
    response.end();
});

app.get('*', function(request, response) {
    response.render('index');
});

app.listen(3030);
console.log('Server listening on port 3030');