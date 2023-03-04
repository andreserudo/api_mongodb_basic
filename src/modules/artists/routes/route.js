const listAction = require('../actions/list');

const routify = (httpServer) => {
    httpServer.get('/artists', listAction)
};

module.exports = routify;