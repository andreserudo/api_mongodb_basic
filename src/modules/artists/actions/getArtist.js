const Artist = require('../model/Artist');

const getArtistAction = async (req, res) => {
    const { id } = req.params;

    try {
        const artist = await Artist.findById(id);
        
        if (!artist) {
            res.status(404).send({ data: 'not found' });
            return
        }

        res.status(200).send({ data: artist });
    }catch (error){
        res.status(500).send({ data: 'something went wrong' });
        return
    }
}

module.exports = getArtistAction;
