'use strict';

module.exports = function (app) {
    app.get('/partials/:partialArea/:partialName', function(request, response) {
        response.render('partials/' + request.params.partialArea + '/' + request.params.partialName);
        response.end();
    });
    
    app.get('*', function(request, response) {
        response.render('index');
    });
};