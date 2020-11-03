// const { on } = require("../models/exercise");

function createWorkouts() {
    //  $(".workoutBtns").empty();
    $.ajax({
        url: "/workoutplan",
        method: "GET"
    }).then(allWorkouts => {
        console.log(allWorkouts)
        //const theWOrkoutIwant = allWorkouts.find(w => w.id === id)
        // allWorkouts.map( (workout) =>
        for (var i = 0; i < allWorkouts.length; i++) {
            $(".workoutBtns").append(
                `<button class="btn workoutBtn" value=${allWorkouts[i]._id}>${allWorkouts[i].name} </button>`
            )
        };
        $(".workoutBtn").click(function (event) {
            event.preventDefault();
            $.ajax({
                url: `/populated/` + `${this.value}`,
                method: "GET"
            }).then(Workout =>{
                for (var i=0;i<Workout.exercises.length;i++) {
                    if (Workout.exercises[i].type === "cardio") {
                        $("#populateHere").append(`
                        <div class="exercise-entry" style="padding:1rem">
                        <p style="margin:0">Name: ${Workout.exercises[i].name}</p>
                        <p style="margin:0">Duration: ${Workout.exercises[i].duration}</p>
                        <p style="margin:0">Distance: ${Workout.exercises[i].distance}</p>
                        </div>
                    `)
                    }
                    else if (Workout.exercises[i].type === "weights") {
                        $("#populateHere").append(`
                        <div class="exercise-entry" style="padding:1rem">
                        <p style="margin:0">Name: ${Workout.exercises[i].name}</p>
                        <p style="margin:0">Weights: ${Workout.exercises[i].weight}</p>
                        <p style="margin:0">Reps: ${Workout.exercises[i].reps}</p>
                        <p style="margin:0">Sets: ${Workout.exercises[i].sets}</p>
                        </div>
                    `)
                    }
                }
            })
        })
    })
}


$("#submitCardio").click(function (event) {
    event.preventDefault();
    const cardio = {
        name: $("#name").val().trim(),
        duration: $("#duration").val().trim(),
        distance: $("#distance").val().trim()
    };
    console.log(cardio)
    $.ajax({
        url: `/submit/`+`${this._id}`,
        data:cardio,
        method:"POST"
    }).then(newExercise => {
        console.log(newExercise)
    })
})
// function editWorkout(id){
//     console.log("editing")
//     // console.log($(this).val())
//     console.log(id)
//     $.ajax({
//         url:"/workoutplan/"+id,
//         method: "GET"
//     }).then(workout => {

//         })

//     })
// }
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


$(document).ready(() => {
    createWorkouts();
});































/*
var obj = {num: 1, name: "bOb"}
var obj2 = {...obj}

const newObj = {}
Object.keys(obj).map(key => newObj[key] = "Hello")

const OneToHundred = [...Array(101).key()].slice(1)
[...Array(101).key()].slice(1)

const arr = [1,2,3,4]
const newArr = arr.map(num => num * 10)

function add(a,b,c){
    return a + b + c
}
function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
const fun = a => b => c => a+b+c
fun(1)(2)(3)
fun(1,2,3)

const arr = [1,2,3]
const newARr = arr.filter(num => num%2 === 0)
const newARr = arr.find(num => num === 2)
[2] -> 2

map, filter, find
*/