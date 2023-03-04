const Artist = require('../model/Artist');

const listAction = async (req, res) => {
    const artists = await Artist.find({});

    res.status(200).send({ data: artists});
}

module.exports = listAction;