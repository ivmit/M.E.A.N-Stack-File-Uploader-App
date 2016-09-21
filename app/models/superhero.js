/**
 * Created by imitrach on 9/21/2016.
 */
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


//Define Super Hero Schema
var SuperheroSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    superPowers: {
        type: String,
        required: true
    },
    picture: {
        type: Schema.Types.Mixed, //this will be saved as an object
        required: true
    },
    morePictures: Schema.Types.Mixed,
    createdAt:{
        type: Date,
        default: Date.now
    }
});

//Sets the createdAt parameter equal to the current time
SuperheroSchema.pre('save', function(next){

    var now = new Date;

    if(!this.createdAt) {
        this.createdAt = now;
    }

    next();

});

module.exports = mongoose.model('superhero', SuperheroSchema);