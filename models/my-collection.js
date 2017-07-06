const mongoose = require('mongoose');

// REF Activities 7.4-collections-mongoose

const vinylSchema = new mongoose.Schema({
  artist: [{ type: String}],
  album: String,
  songs: {
    aSide: [{type: String}],
    bSide: [{type: String}]
  },
  // release: { type: Date },
  size: Number
});

const Vinyl = mongoose.model('Vinyl', vinylSchema);

module.exports = Vinyl;
