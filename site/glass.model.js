// glass.model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const glassSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required:true,
        minlength:8,
        trim:true

    },
    address:{
        type: String,
        required:true,
    },
    cart: {
        type: [String],
        
    },
    fav:{
        type: [String],
    },
    card_number:{
        type: Number,
        minlength:16,
        maxlength:16,
        required: true,

    },
    cvv:{
        type:Number,
        minlength:3,
        maxlength:3,
        required: true,
    },
    card_date:{
        type: Date,
        required: true,
    }


}, {
    timestamps: true,
});

const Glass = mongoose.model('Glass', glassSchema);

module.exports = Glass;