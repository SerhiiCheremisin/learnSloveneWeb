const mongoose = require('mongoose');
const UserSchema = require('./schemas')

const userModel = mongoose.model("users", UserSchema);

module.exports = userModel;