const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
       require:[true,'Name is missing']
    },
    email: {
        type: String,
        require:[true,'Email is missing']
    },
    pwd: {
        type: String,
        require:[true,'Password is missing']
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User
