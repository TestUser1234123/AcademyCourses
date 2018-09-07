let express = require('express'),
    mongoose = require('mongoose'),
    env = process.env.NODE_EVN || 'development',
    app = express(),
    config = require('./server/config/config')[env];

require('./server/config/express')(app, config);


mongoose.connect(config.db, { useNewUrlParser: true });
let db = mongoose.connection;

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

let messageSchema = mongoose.Schema({
    message: String
});

let Message = mongoose.model('Message', messageSchema);

app.get('/partials/:partialArea/:partialName', function(request, response) {
    response.render('partials/' + request.params.partialArea + '/' + request.params.partialName);
    response.end();
});

app.get('*', function(request, response) {
    response.render('index');
});

app.listen(3030);
console.log('Server listening on port 3030');