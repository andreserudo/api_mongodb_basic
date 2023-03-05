const Artist = require('../model/Artist');
const { Error } = require('mongoose')

const createAction = async (req, res) => {
    const artist = req.body;

    try {
        await Artist.create(artist);

        res.status(201).send()
        return
    }catch (error){
        if (error instanceof Error.ValidationError) {
            const {name} = error.errors;

            res.status(400).send({message: error.message})
            return
          } else {
            res.status(500).send({message: 'something went wrong'})
            return
        }
    }
}

module.exports = createAction;