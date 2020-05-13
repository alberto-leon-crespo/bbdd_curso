const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/nueva_bbdd', {useNewUrlParser: true, useUnifiedTopology: true});

const UserSchema = new Schema({
  id: Number,
  name: String,
  username: String
});

module.exports = mongoose.model('User', UserSchema);
