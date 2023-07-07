const mongoose = require('mongoose')
const { Schema } = mongoose;

const registerSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const register = mongoose.model('userRegisters', registerSchema);
module.exports = register;