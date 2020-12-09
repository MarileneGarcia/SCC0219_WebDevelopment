// glass.model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const glassSchema = new Schema({
    code: {
        type: String,
        unique: true,
        trim: true,
        minlength: 3
    },
    price: {
        type: Number,
        required:true,

    },
    alias:{
        type:String,
        required:true,
    },
    details:{
        type:String,
        required:true,
    },
    format:{
        type: String,
        required:true
    },
    tipo:{
        type:String,
        required:true
    },
    img:{
        type:String, 
        required: true,
    },
   


}, {
    timestamps: true,
});

const Glass = mongoose.model('Glass', glassSchema);

module.exports = Glass;