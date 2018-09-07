'use strict';

let express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    path = require('path');

module.exports = function (app, config) {
    app.set('view engine', 'jade');
    app.set('views', path.join(config.rootPath, '/server/views'));

    app.use(bodyParser.urlencoded(
        {
        extended: true
        }
    ));

    app.use(stylus.middleware(
        {
            src: path.join(config.rootPath, 'public'),
            compile: function(str, path) {
                return stylus(str).set('filename', path);
            }
        }
    ));

    app.use(express.static(path.join(config.rootPath, 'public')));
};