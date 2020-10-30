const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutPlanSchema = new Schema ({
name:{
    type:String,
    trim:true,
    required:"Exercise name required!"
},
exercise:[
    {
        type:Schema.Types.ObjectId,
        ref:"exercise"
    }
]
})

const workout = mongoose.model("workoutPlan", workoutPlanSchema)

module.exports = workout;