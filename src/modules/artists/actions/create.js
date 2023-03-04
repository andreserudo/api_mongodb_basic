const Artist = require('../model/Artist');

const createAction = async (req, res) => {
    const artist = req.body;

    try {
        await Artist.create(artist);

        res.status(201).send()
        return
    }catch (error){
        res.status(500).send({message: error})
        return
    }
}

module.exports = createAction;