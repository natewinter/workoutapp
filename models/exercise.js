const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
name:{
    type:String,
    trim:true,
    required:"enter a name for exercise!"
},
type:{
    type:String,
    trim:true,
},
weight:{
    type:Number  
},
sets:{
    type:Number,

},
reps:{
    type:Number,
},
duration:{
    type:Number,
},
distance:{
    type:Number,
}
});

const exercise = mongoose.model("exercise",exerciseSchema);

module.exports = exercise;