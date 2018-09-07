'use strict';

let mongoose = require('mongoose');

module.exports = function(config) {
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
};