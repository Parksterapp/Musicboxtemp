const { Schema, model } = require('mongoose');

const songSchema = new Schema({
  title: String,
  artist: String,
  genre: String,
});

const userSchema = new Schema({
  name: String,
  email: String,
  likedSongs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
});

const Song = model('Song', songSchema);
const User = model('User', userSchema);

module.exports = { Song, User };
