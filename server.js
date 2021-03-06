'use strict';

let express = require('express'),
    app = express(),
    env = process.env.NODE_EVN || 'development',
    config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);

app.listen(config.port, () => { console.log('Server running on port ' + config.port) });
