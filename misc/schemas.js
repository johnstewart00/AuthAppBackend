const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    address: String, 
    gender: String
});
module.exports = userSchema
