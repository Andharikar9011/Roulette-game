const mongoose = require('mongoose');

const casinoSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required:true
    },
    balanceamt:{
        type:Number,
        required:true
    },
    dealers:{
        type: Array
    }
}) 

exports.casino = mongoose.model('Casino',casinoSchema)