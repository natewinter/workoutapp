const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
name:{
    type:String,
    trim:true,
    required:"Exercise name required!"
},
type:{
    type:String,
    trim:true,
    required:"Type of exercise required!"
},
weight:{
    type:Number  
},
sets:{
    type:Number,
    required:"Number of sets required!"

},
reps:{
    type:Number,
    required:"Number of reps required!"
},
duration:{
    type:Number,
    required:"Duration of exercise required!"
},
distance:{
    type:Number,
}
});

const exercise = mongoose.model("exercise",exerciseSchema);

module.exports = exercise;