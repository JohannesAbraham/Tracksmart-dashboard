const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    type:{type:String,enum:['buyer','seller']}
})

const User = mongoose.model('User', userSchema);

module.exports = User;