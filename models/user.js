const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating user

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true,'Name is required']
    },
    email: {
        type: String,
        required: [true,'Email is required']
    },
    password: {
        type: String,
        required: [true,'Password is required']
    }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;