'use strict';

let mongoose = require('mongoose'),
    passport = require('passport'),
    LocalPassport = require('passport-local').Strategy;

module.exports = function(config) {
    mongoose.connect(config.db, { useNewUrlParser: true });
    let db = mongoose.connection;

    db.once('open', function (err) {
        if (err) {
            console.log('Database cannot be open: ' + err);
            return;
        }

        console.log('Database up and running...');
    });

    db.on('error', function (err) {
        console:log('Database error: ' + err);
    });

    let userSchema = mongoose.Schema({
        username: String,
        firstName: String,
        lastName: String
        //salt: String,
        //hashPassword: String
    });

    let User = mongoose.model('User', userSchema);


    User.find({}).exec(function(err, usersCollection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
        }

        if (usersCollection.length === 0) {
            User.create({ username: 'g.yonchev', firstName: 'Georgi', lastName: 'Yonchev' });
            User.create({ username: 'user1', firstName: 'Tom', lastName: 'John' });
            User.create({ username: 'user2', firstName: 'Jane', lastName: 'Morris' });
            console.log('Users added to the database...');
        }
    });

    passport.use(new LocalPassport(function(username, password, done) {
        User.findOne({ username: username })
            .exec(function (err, user) {
                if (err) {
                    console.log('Error woading user: '+ err);
                    return done(err);
                }

                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                //if (!user.validPassword(password)) {
                //  return done(null, false, { message: 'Incorrect password.' });
                //}
                
                return done(null, user);
            });
    }));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });
      
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
};