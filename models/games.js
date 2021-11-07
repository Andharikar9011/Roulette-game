const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    starttime:{
        type: Date,
        required:true
    },
    endtime:{
        type: Date,
        required:true
    },
    status:{
        type: String,
    enum: {
      values: ['starting', 'onoing','ended'],
      message: '{VALUE} is not supported'
        }
    },
    thrownnum:{
        type:Number,
        required:true
    }
}) 

exports.game = mongoose.model('Game',gameSchema)