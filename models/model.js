const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    plot: {type: String},
    generes: {type: Array},
    runtime: {type: Number},
    cast: {type: Array},
    poster: {type: String},
    title:{type: String},
    fullplot:{type: String},
    languages: {type: Array},
    release:{type: Date},
    directors:{type: Array},
    rated: {type: String},
    awards: {type:Object},
    lastupdated: {type: String},
    year: {type: Number},
    imdb: {type: Object},
    countries: {type: Array},
    type: {type: String},
    tomatoes: {type: Object},
    num_mflix_comments: {type: Number}

});

module.exports = mongoose.model('Movie', movieSchema);