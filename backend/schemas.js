const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({
userPassword: String,
userName: String,
userDictionary : Array,
})

module.exports = UserSchema;