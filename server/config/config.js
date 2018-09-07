'use strict';
let path = require('path'),
    rootPath = path.normalize(__dirname + '/../../'),
    envPort = process.env.PORT;

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/academycourses',
        port: envPort || 3030
    },
    testing: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/academycourses',
        port: envPort || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/academycourses',
        port: envPort || 3030
    }
}