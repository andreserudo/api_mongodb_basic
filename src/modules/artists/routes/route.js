const listAction = require('../actions/list');
const getArtistAction = require('../actions/getArtist');
const createAction = require('../actions/create');

const routify = (httpServer) => {
    httpServer.get('/artists', listAction);
    httpServer.get('/artist/:id', getArtistAction);
    httpServer.post('/artist', createAction);
};

module.exports = routify;