const mongoose = require('mongoose');

const { Schema } = mongoose;

const Userschema = new Schema({
    Name:{
        type:String,
        require:true
    },
    Location:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now
    }

});


module.exports = mongoose.model('user',Userschema)