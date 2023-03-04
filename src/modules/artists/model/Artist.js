const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArtistSchema = new Schema({
    name: { type:String, required: true },
    countOfListeners: { type: Number, default: 0 }
},{ timestamps: true});

const Artist = mongoose.model('artists', ArtistSchema);

module.exports = Artist;
