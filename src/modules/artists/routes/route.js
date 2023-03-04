const listAction = require('../actions/list');
const getArtistAction = require('../actions/getArtist');

const routify = (httpServer) => {
    httpServer.get('/artists', listAction);
    httpServer.get('/artist/:id', getArtistAction);
};

module.exports = routify;