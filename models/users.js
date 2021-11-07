const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required:true
    },
    balanceamt:{
        type:Number,
        required:true
    },
    currentCasino:{
        type: mongoose.Types.ObjectId
    }
}) 

exports.user = mongoose.model('User',userSchema)