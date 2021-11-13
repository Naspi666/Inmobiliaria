const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  lastname: String,
  username: String,
  password: String,
  email: String,
  phone: String
});

module.exports = mongoose.model('users', UserSchema);