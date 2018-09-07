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

    let userSchema = mongoose.Schema({
        username: String,
        firstName: String,
        lastName: String
        //salt: String,
        //hashPassword: String
    });

    let User = mongoose.model('User', userSchema);


    User.find({}).exec(function(error, usersCollection) {
        if (error) {
            console.log('Cannot find users: ' + error);
            return;
        }

        if (usersCollection.length === 0) {
            User.create({ username: 'g.yonchev', firstName: 'Georgi', lastName: 'Yonchev' });
            User.create({ username: 'user1', firstName: 'Tom', lastName: 'John' });
            User.create({ username: 'user2', firstName: 'Jane', lastName: 'Morris' });
            console.log('Users added to the database...');
        }
    })
};