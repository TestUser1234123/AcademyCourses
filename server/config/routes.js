'use strict';

module.exports = function (app) {
    app.get('/partials/:partialArea/:partialName', function(req, res) {
        res.render('partials/' + req.params.partialArea + '/' + req.params.partialName);
        res.end();
    });

    app.post('/login', function(req, res, next) {
        var auth = passport.authenticate('local', function(err, user) {
            if (err) { return next(err); }
            //if (!user) { return res.redirect('/login'); }
            if (!user) { return res.send({ success: false }); }
            
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                //return res.redirect('/users/' + user.username);
                return res.send({ success: true, user: user });
            });
        });

        auth(req, res, next);
    });

    app.get('*', function(req, res) {
        res.render('index');
    });
};