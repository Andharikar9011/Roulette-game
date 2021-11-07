const mongoose = require('mongoose');

const betSchema = mongoose.Schema({
    betamt:{
        type:Number,
        required:true
    },
    betamt:{
        type: Number,
        required: true
    },
    bettingtime:{
        type: Date
    },
    user:{
        type: mongoose.Types.ObjectId,
        required : true
    },
    game:{
        type: mongoose.Types.ObjectId,
        required : true
    },
    BetStatus:{
        type: String,
        enum: {
            values: ['win', 'lose'],
            message: '{VALUE} is not supported'
              }
    }
}) 

exports.bet = mongoose.model('Bet',betSchema)